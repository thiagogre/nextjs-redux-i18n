const withImages = require('next-images')

module.exports = withImages({
  esModule: true
})

const { nextI18NextRewrites } = require('next-i18next/rewrites')
const localeSubpaths = {
  en: 'en',
  pt: 'pt'
}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths)
}
