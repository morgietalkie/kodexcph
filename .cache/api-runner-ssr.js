var plugins = [{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-159220266-1"},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/company-logo.png"},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"apiURL":"http://localhost:3333","projectId":"j7i4hfvy","dataset":"production"},
    },{
      plugin: require('/Users/Morgan/Documents/webdev/kodex_cph/kodex-cph/node_modules/gatsby-plugin-prefetch-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":[{"family":"Merriweather","variants":["300","300i","400","400i","700","700i","900","900i"]},{"family":"Montserrat","variants":["100","100i","200","200i","300","300i","400","400i","500","500i","600","600i","700","700i","800","800i","900","900i"]}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
