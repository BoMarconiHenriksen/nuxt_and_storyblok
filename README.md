# Nuxt and Storyblok
```npm install --save storyblok-nuxt```  
### Register Storyblok in Vuejs
##### In nuxt.config.js  
```
modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['storyblok-nuxt', { accessToken: 'EnterYourAccessTokenHere', cacheProvider: "memory" } ]
  ],
```
#### We can now get our data from Storyblok
```npm run dev```  
##### Getting more elements
