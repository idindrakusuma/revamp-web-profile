module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@layouts': 'src/components/Layouts',
        },
        extensions: ['js'],
      },
    },
  ],
  siteMetadata: {
    title: 'Indra Kusuma - Profesional Web Developer',
    description:
      'Hello! My name is Indra Kusuma. I am an optimistic and type of person of learn by doing who have an interest in Software Engineering, specifically about Web Development.',
    url: 'https://indrakusuma.web.id',
    image: 'https://user-images.githubusercontent.com/10141928/35048258-069b7a48-fbcf-11e7-8c38-c924da4cce81.jpg',
    twitterUsername: '@id_indrakusuma',
  },
};
