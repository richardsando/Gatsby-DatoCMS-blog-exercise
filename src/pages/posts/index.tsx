import React from "react";
import { Link, graphql } from "gatsby";

interface AllPostsPagesProps {
  data: {
    blogPosts: {
      nodes: [
        {
          id: string;
          title: string;
          content: string;
          author: string;
          slug: string;
        }
      ];
    };
  };
}

const Index = ({ data }: AllPostsPagesProps) => {
	console.log(data.blogPosts);
	return (
		<div>
			{<h1>This is where the posts live!!</h1>}
			<ul>
				{data.blogPosts.nodes.map((post) => {
					return (
						<li key={post.title}>
							<Link to={post.slug} style={{ textDecoration: "none" }}>
								<h2>{post.title}</h2>
								<p>{post.author}</p>
							</Link>
						</li>
					);
				})}
			</ul>
			<Link to='/'><p>Home</p></Link>
		</div>
	);
};

export const query = graphql`
  {
    blogPosts: allDatoCmsBlogPost {
      nodes {
        id
        title
        content
        slug
        author
      }
    }
  }
`;

export default Index;
