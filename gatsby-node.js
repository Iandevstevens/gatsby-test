exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulAd {
        nodes {
          id
          adImage {
            gatsbyImageData
          }
        }
      }
    }
  `)
  data.allContentfulAd.nodes.forEach(node => {
    const slug = node.id
    actions.createPage({
      path: `/earn/ad/${slug}`,
      component: require.resolve(`./src/templates/ad.tsx`),
      context: { ad: node },
    })
  })
}
