module.exports = {
  siteMetadata: {
    title: "My First Gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
