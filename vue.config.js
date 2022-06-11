module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './Kenneth-s-portfolio/'
        : './',
    css: { extract: false }
}