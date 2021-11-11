import React from "react";
import { graphql, Link } from "gatsby";

interface PostPageProps {
  data: {
    datoCmsBlogPost: {
      title: string;
      id: string;
      content: string;
      author: string;
      slug: string;
      meta: {
        createdAt: string;
      };
    };
  };
}

const BlogPost = (params: any) => {
	const { data } = params;
	const info = data.datoCmsBlogPost;
	const date = new Date(info.meta.createdAt).toLocaleString();
	return (
		<div>
			<div>
				<h1>{info.title}</h1>
				<p>{info.content}</p>
				<p>by {info.author}</p>
				<p>posted {date}</p>
			</div>
			<div>
				<Link to="/posts/">
					<p> Back to all posts</p>
				</Link>
			</div>
		</div>
	);
};

export const query = graphql`
  query ($id: String) {
    datoCmsBlogPost(id: { eq: $id }) {
      title
      slug
      content
      author
      meta {
        createdAt
      }
    }
  }
`;

export default BlogPost;
