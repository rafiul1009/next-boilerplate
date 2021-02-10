const NextI18Next = require('next-i18next').default;
const path = require('path');

module.exports = new NextI18Next({
    defaultLanguage: "en",
    otherLanguages: ['bn'],
    defaultNS: 'common',
    localeSubpaths: {
        bn: 'bn'
    },
    localePath: path.resolve('./public/static/locales'),
    strictMode: false
})
