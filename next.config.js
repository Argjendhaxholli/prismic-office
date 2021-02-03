const withTM = require('next-transpile-modules')(['next-slicezone', 'essential-slices']);

// module.exports = withTM();

// next.config.js
module.exports = {
    images: {
        domains: ['images.prismic.io'],
    },
}