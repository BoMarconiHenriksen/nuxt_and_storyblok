<template>
  <section id="posts">
    <!-- dynamic populate the posts -->
    <PostPreview 
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id"
      />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview';

export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi
    .get('cdn/stories', {
      // Is true if we are in developermode.  
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    })
    .then(response => {
      return {
        posts: response.data.stories.map(blogPost => {
        return {
          id: blogPost.slug,
          title : blogPost.content.title,
          previewText: blogPost.content.summary,
          thumbnailUrl: blogPost.content.thumbnail
        }
      })
      };
    });
  }
  /* data() {
    return {
      posts: [{
        title: 'A new beginning!',
        previewText: 'This will be a new beginning don\'t miss it!',
        thumbnailUrl: 'https://myrepublica.nagariknetwork.com/uploads/media/2019/April/healthy%20fod.jpg',
        id: 'a-new-beginning'
       },
       {
        title: 'A second beginning!',
        previewText: 'This will be a second beginning don\'t miss it!',
        thumbnailUrl: 'https://myrepublica.nagariknetwork.com/uploads/media/2019/April/healthy%20fod.jpg',
        id: 'a-second-beginning'
       }
      ]
    }
  } */
}
</script>

<style scoped>
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
</style>
