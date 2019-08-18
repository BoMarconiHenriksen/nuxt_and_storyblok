<template>
    <section id="about-page" v-editable="blok"> 
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </section>
</template>

<script>
export default {
    asyncData(context) {
        return context.app.$storyapi.get('cdn/stories/about', {
            version: context.isDev ? 'draft' : 'published'
        }).then(response => {
            return {
                blok: response.data.story.content,
                title: response.data.story.content.title,
                content: response.data.story.content.content
            }
        })
    },
    mounted() {
        // Initialize the project so we can live edit.
        this.$storybridge.on(['input', 'published', 'change'], (event) => {
        if (event.action == 'input') {
            if (event.story.id === this.story.id) {
            this.story.content = event.story.content
            }
        } else {
            window.location.reload()
        }
        });
    }
}
</script>

<style scoped>
#about-page {
    width: 80%;
    max-width: 500px;
    margin: auto;
}

/* Preserve linebreaks */
#about-page p {
    white-space: pre-line;
}
</style>
