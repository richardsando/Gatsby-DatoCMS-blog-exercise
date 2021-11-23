import axios from "axios";
import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Search from "../components/Search/Search";

const Articles = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const queryServer = async () => {
      const response = await axios.get("http://localhost:3001/articles");

      setData(response.data);
    };

    queryServer();
  }, []);

  return (
    <div>
      <Nav />
      <h1>Museums Victoria Database</h1>
      <h2>Search Database</h2>
      <Search />
      <h2>Featured Articles</h2>
      <ul className="featured-articles-list">
        <li className="featured-articles-list-item">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            obcaecati consectetur eaque aperiam pariatur provident rem est
            necessitatibus blanditiis soluta incidunt cupiditate odio suscipit
            nulla itaque reprehenderit, harum quisquam laboriosam!
          </p>
        </li>
        <li className="featured-articles-list-item">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            obcaecati consectetur eaque aperiam pariatur provident rem est
            necessitatibus blanditiis soluta incidunt cupiditate odio suscipit
            nulla itaque reprehenderit, harum quisquam laboriosam!
          </p>
        </li>
        <li className="featured-articles-list-item">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            obcaecati consectetur eaque aperiam pariatur provident rem est
            necessitatibus blanditiis soluta incidunt cupiditate odio suscipit
            nulla itaque reprehenderit, harum quisquam laboriosam!
          </p>
        </li>
        <li className="featured-articles-list-item">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            obcaecati consectetur eaque aperiam pariatur provident rem est
            necessitatibus blanditiis soluta incidunt cupiditate odio suscipit
            nulla itaque reprehenderit, harum quisquam laboriosam!
          </p>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Articles;
