const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/yuusuke_mbp/Desktop/hello-react/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/yuusuke_mbp/Desktop/hello-react/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/yuusuke_mbp/Desktop/hello-react/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/yuusuke_mbp/Desktop/hello-react/src/templates/BlogPost.js")))
}

