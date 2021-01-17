const NextI18Next = require('next-i18next').default
const path = require('path')
module.exports = new NextI18Next({
  defaultNS: 'pageLanding',
  otherLanguages: ['pt'],
  localeSubpaths: {
    en: 'en',
    pt: 'pt'
  },
  localePath: path.resolve('./public/static/locales')
})
