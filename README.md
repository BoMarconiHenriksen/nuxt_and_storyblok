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
https://github.com/BoMarconiHenriksen/nuxt_and_storyblok/commit/33c135ff7b39fc5b5b4a5e2ece537ca7f8a72b22  
### Fetch one element like the About page from Storyblok
Create a folder in Storyblok and then create a new entry in that folder and check "Define as root for the folder".  
### Pregenerate the homepage
npm run generate  

