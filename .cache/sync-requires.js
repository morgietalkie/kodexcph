const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/src/templates/blog.js"))),
  "component---src-templates-project-js": hot(preferDefault(require("/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/src/templates/project.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/src/pages/index.js")))
}

