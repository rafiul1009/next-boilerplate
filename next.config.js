const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const withImages = require('next-images');

const path = require('path');

const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    bn: 'bn'
}

//console.log(env);
module.exports = withImages(withBundleAnalyzer({
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.node = {
            fs: 'empty',
        };
        config.resolve.alias['components'] = path.join(__dirname, 'components');
        config.resolve.alias['public'] = path.join(__dirname, 'public');
        return config;
    },
}));
