module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: [
          'gatsby-theme-colors',
        ]
      }
    },
    'gatsby-plugin-emotion',
  ]
}
