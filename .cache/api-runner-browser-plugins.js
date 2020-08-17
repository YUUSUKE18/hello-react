module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Hello React Blog","short_name":"HelloReactBlog","start_url":"/","background_color":"#337ab7","theme_color":"#337ab7","display":"fullscreen","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":500},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
