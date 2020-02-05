import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const Logo = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Link to="/">
        <img
          src={data.datoCmsSite.globalSeo.fallbackSeo.image.sizes.src}
          alt={data.datoCmsSite.globalSeo.siteName}
          width="125px"
        />
      </Link>
    )}
  />
);

export const query = graphql`
  query LogoQuery {
    datoCmsSite {
      globalSeo {
        siteName
        fallbackSeo {
          image {
            sizes(imgixParams: { w: "500" }) {
              src
            }
          }
        }
      }
    }
  }
`;

export default Logo;
