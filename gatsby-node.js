const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            path
            status
            template
            format
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost } = result.data

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/page.js`)

  
  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: edge.node.path,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  const blogTemplate = path.resolve(`./src/pages/blog.js`)
  const MixingTemplate = path.resolve(`./src/pages/mixing/index.js`)
  const MasteringTemplate = path.resolve(`./src/pages/mastering/index.js`)
  const SoundDesignTemplate = path.resolve(`./src/pages/sound-design/index.js`)
  const MusicTheoryTemplate = path.resolve(`./src/pages/music-theory/index.js`)
  const FreeStuffTemplate = path.resolve(`./src/pages/free-stuff/index.js`)
  const ReviewsTemplate = path.resolve(`./src/pages/reviews/index.js`)

  createPage({
    path: `/blog`,
    component: slash(blogTemplate)
  });

  createPage({
    path: `/category/mixing`,
    component: slash(MixingTemplate)
  });

  createPage({
    path: `/category/mastering`,
    component: slash(MasteringTemplate)
  });

  createPage({
    path: `/category/sound-design`,
    component: slash(SoundDesignTemplate)
  });

  createPage({
    path: `/category/music-theory`,
    component: slash(MusicTheoryTemplate)
  });

  createPage({
    path: `/category/free-stuff`,
    component: slash(FreeStuffTemplate)
  });

  createPage({
    path: `/category/reviews`,
    component: slash(ReviewsTemplate)
  });
  // We want to create a detailed page for each post node.
  // The path field stems from the original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}