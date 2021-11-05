import path from 'path';

// const turnPostsIntoPages = async ({ graphql, actions }) => {
//   //get template
//   const blogPostTemplate = path.resolve('./src/templates/BlogPost.tsx');
//   //query all pizzas
//   const { data } = await graphql(`
//   query {
//       blogPosts: allDatoCmsBlogPost {
//         nodes: {
//             title
//             slug
//         }
//       }
//   }
//   `);
//   console.log(data);
// };

// export async function createPages() {
//   await turnPostsIntoPages(params);
// }

exports.createPages = async ({ graphql, actions, getNodesByType }) => {
    const { createPage } = actions;
    console.log("hellooo")

    const allPosts = await graphql(`
        {
          allDatoCmsBlogPost {
            nodes {
              id
              title
              slug
              content
              author
              }
            }
          }
        }
      `);

    allPosts.data.allDatoCmsBlogPost.nodes.map(async (node) => {
        // console.log(node)
      createPage({
        path: node.slug,
        component: path.join(__dirname, '/src/components/BlogPost.tsx'),
        context: {
          id: node.slug,
        },
      });
    });
  };
