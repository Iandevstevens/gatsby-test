exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allContentfulAd(filter: { type: { eq: 2 } }) {
        nodes {
          adId
          image {
            gatsbyImageData
          }
        }
      }
      allContentfulSurvey {
        nodes {
          questionText
          questionType
          possibleAnswers
          surveyId
        }
      }
    }
  `)
  data.allContentfulAd.nodes.forEach(node => {
    const slug = node.adId
    actions.createPage({
      path: `/earn/ad/${slug}`,
      component: require.resolve(`./src/templates/ad.tsx`),
      context: { ad: node },
    })
  })
  data.allContentfulSurvey.nodes.forEach(node => {
    const slug = node.surveyId
    actions.createPage({
      path: `/earn/survey/${slug}`,
      component: require.resolve(`./src/templates/survey.tsx`),
      context: { survey: node },
    })
  })
}
