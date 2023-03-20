import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  assetPrefix: "/cv",
  siteMetadata: {
    title: `Andrii Ponamarov CV`,
    siteUrl: `https://dresha-dev.github.io`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Andrii Ponamarov, Senior Software Engineer",
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};

export default config;
