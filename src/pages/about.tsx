import React from "react";
import { graphql } from "gatsby";

interface AboutPageProps {
  data: {
    datoCmsAboutUsPage: {
      aboutme: string;  
      aboutMe: string;
    
    };
  };
}

const About = ({ data }: AboutPageProps) => (
	<article className="sheet">
		<h1>{data.datoCmsAboutUsPage.aboutMe}</h1>
		<p>{data.datoCmsAboutUsPage.aboutme}</p>
	</article>
);
export const query = graphql`
  query posQuery {
    datoCmsAboutUsPage {
      id
      aboutme
      aboutMe
    }
  }
`;

export default About;
