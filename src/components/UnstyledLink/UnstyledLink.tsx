import React from "react";
import { Link } from "gatsby";

interface UnstyledLinkProps {
  linkTo: string;
}

const UnstyledLink = (linkTo: string) => {
	return <Link to={linkTo} style={{ textDecoration: "none" }}></Link>;
};

export default UnstyledLink;
