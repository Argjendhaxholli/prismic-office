const withTM = require('next-transpile-modules')(['next-slicezone', 'essential-slices']);
const withCSS = require('@zeit/next-css');
module.exports = withTM(withCSS({
    cssLoaderOptions: {
        url: false
    }
}));

