const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/yuusuke_mbp/Desktop/hello-yuusuke/gatsby-theme-events/.cache/dev-404-page.js"))),
  "component---src-templates-event-js": hot(preferDefault(require("/Users/yuusuke_mbp/Desktop/hello-yuusuke/gatsby-theme-events/src/templates/event.js"))),
  "component---src-templates-events-js": hot(preferDefault(require("/Users/yuusuke_mbp/Desktop/hello-yuusuke/gatsby-theme-events/src/templates/events.js")))
}

