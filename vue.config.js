module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './kenneth-s-portfolio/'
        : './',
    css: { extract: false }
}