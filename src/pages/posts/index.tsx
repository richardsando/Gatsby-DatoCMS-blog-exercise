import { graphql, Link } from "gatsby";
import React from "react";

interface AllPostsPageProps {
  data: {
    allDatoCmsBlogPost: {
      nodes: [
        {
          id: string;
          title: string;
          content: string;
          slug: string;
        }
      ];
    };
  };
}

const Posts = ({ data }: AllPostsPageProps) => {
  const posts = data.allDatoCmsBlogPost.nodes;
  return (
    <div>
      {<h1>This is where the posts live!!</h1>}
      <ul>
        {posts.map(({ id, title, content, slug }) => {
          console.log(title);
          return (
            <li key={id}>
              <Link to ={`/posts/${slug}`} state={slug} >
                <h2>{title}</h2>
                <p>{content}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const query = graphql`
  query allBlogPostQuery {
    allDatoCmsBlogPost {
      nodes {
        id
        title
        content
        slug
      }
    }
  }
`;

export default Posts;
