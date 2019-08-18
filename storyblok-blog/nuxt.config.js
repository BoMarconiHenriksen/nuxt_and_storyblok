const axios = require('axios');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Storyblok and Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Blog about tech stuff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['storyblok-nuxt', { accessToken: process.env.NODE_ENV == 'production' 
    ? 'IyVK80fqrW62n8HvjiUQ9gtt' 
    : 'BRsQNl5OqNVPbZrcepAN5Att', cacheProvider: "memory" } ]
  ],

  // Which dynamic routes should be genereted for prerendered sites.
  generate: {
    routes: function() {
      // We fetch our routes from Storyblok.
      return axios.get('https://api.storyblok.com/v1/cdn/stories?version=published&token=IyVK80fqrW62n8HvjiUQ9gtt&starts_with=blog&cv=' 
      + Math.floor(Date.now() / 1e3)
      ).then(response => {
        const blogPosts = response.data.stories.map(blogPost => blogPost.full_slug);
        return [
          '/',
          '/blog',
          '/about',
          ...blogPosts
        ]
      })
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
