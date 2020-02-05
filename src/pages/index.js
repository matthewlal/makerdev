import React from "react";
import { Link, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Img from "gatsby-image";
import Layout from "../components/layout";
import MeetupCard from "../components/meetupCard";
import StyledLink from "../components/styledLink";
import SectionHeader from "../components/sectionHeader";

const IndexPage = ({ data }) => (
  <Layout>
    <SectionHeader>Recent Events</SectionHeader>
    <Masonry className="showcase">
      {data.allMeetupEvent.edges.map(({ node: event }) => (
        <MeetupCard
          id={event.id}
          featured_photo={event.featured_photo.photo_link}
          local_date={event.local_date}
          local_time={event.local_time}
          link={event.link}
          name={event.name}
          group_urlname={event.group.urlname}
          group_name={event.group.name}
          venue_name={event.venue.name}
          venue_address_1={event.venue.address_1}
          venue_city={event.venue.city}
          venue_state={event.venue.state}
          venue_localized_country_name={event.venue.localized_country_name}
          venue_zip={event.venue.zip}
          yes_rsvp_count={event.yes_rsvp_count}
          status={event.status}
        />
      ))}
    </Masonry>
    <StyledLink to={`/events`}>See more...</StyledLink>
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

export default IndexPage;

export const query = graphql`
  query IndexQuery {
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
    allMeetupEvent(limit: 2, sort: { order: DESC, fields: local_date }) {
      edges {
        node {
          featured_photo {
            photo_link
          }
          group {
            name
            urlname
          }
          local_date
          local_time
          link
          id
          yes_rsvp_count
          status
          name
          venue {
            name
            address_1
            city
            localized_country_name
            state
            zip
          }
        }
      }
    }
  }
`;
