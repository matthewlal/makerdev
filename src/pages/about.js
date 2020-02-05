import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import Layout from "../components/layout";
import styled from "styled-components";
import Grid from "styled-components-grid";

const ProfileAvatar = styled(Img)`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 15px;
`;

const ProfileWrapper = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
`;

const About = ({ data: { about } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={about.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{about.title}</h1>
        <p className="sheet__lead">{about.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={about.photo.fluid} />
        </div>
        <h1 className="sheet__title">
          {about.communityLeaders[0].model.name}s
        </h1>
        <Grid>
          {about.communityLeaders.map(communityLeader => (
            <Grid.Unit
              key={communityLeader.originalId}
              size={{ mobile: 1, tablet: 1 / 2, desktop: 1 / 2 }}
            >
              <ProfileWrapper>
                <ProfileAvatar fluid={communityLeader.profilePhoto.fluid} />
                <h6>{communityLeader.name}</h6>
                <h6>{communityLeader.excerpt}</h6>
                <h6>
                  Chapter(s):{" "}
                  {communityLeader.chapter
                    .map(chapter => chapter.title)
                    .join(", ")}
                </h6>
              </ProfileWrapper>
            </Grid.Unit>
          ))}
        </Grid>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html
          }}
        />
      </div>
    </article>
  </Layout>
);

export default About;

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
      communityLeaders {
        originalId
        model {
          name
        }
        name
        chapter {
          title
          excerpt
        }
        excerpt
        profilePhoto {
          fluid(imgixParams: { auto: "compress", fm: "jpg" }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
    }
  }
`;
