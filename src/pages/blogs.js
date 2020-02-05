import React from "react";
import { Link, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";
import SectionHeader from "../components/sectionHeader";
import Img from "gatsby-image";

const BlogsPage = ({ data }) => (
  <Layout>
    <SectionHeader>Blogs</SectionHeader>
    <Masonry className="showcase">
      {data.allDatoCmsBlog.edges.map(({ node: blog }) => (
        <div key={blog.id} className="showcase__item">
          <figure className="card">
            <Link to={`/blogs/${blog.slug}`} className="card__image">
              <Img fluid={blog.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
              </h6>
              <div className="card__description">
                <p>{blog.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
);

export default BlogsPage;

export const query = graphql`
  query BlogsQuery {
    allDatoCmsBlog(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
