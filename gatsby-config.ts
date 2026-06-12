import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/cv",
  trailingSlash: "always",
  siteMetadata: {
    title: `Andrii Ponamarov CV`,
    siteUrl: `https://dresha-dev.github.io/cv/`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
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
