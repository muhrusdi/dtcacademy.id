/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: `@emotion/babel-preset-css-prop`,
    options: {
      autoLabel: true,
      labelFormat: "[local]",
    },
  })
}
