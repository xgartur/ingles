import plugin_gridsome_plugin_tailwindcss_5 from "/home/arturo/git/arturo/ingles/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_10 from "/home/arturo/git/arturo/ingles/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"./tailwind.config.js","purgeConfig":{"whitelist":["svg-inline--fa","table","table-striped","table-bordered","table-hover","table-sm"],"whitelistPatterns":[{},{},{},{},{},{},{},{}]},"presetEnvConfig":{"stage":0,"autoprefixer":false},"shouldPurge":false,"shouldImport":false,"shouldTimeTravel":false,"shouldPurgeUnusedKeyframes":true}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_10,
    options: {"pathPrefix":"","siteUrl":"","searchFields":["title","content"],"collections":[{"typeName":"Blog","indexName":"Blog","fields":["title","category","excerpt","content"]}],"chunk":false,"compress":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  }
]
