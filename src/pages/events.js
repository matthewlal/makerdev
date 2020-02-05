import React from "react";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";
import MeetupCard from "../components/meetupCard";
import SectionHeader from "../components/sectionHeader";
import { graphql } from "gatsby";

const EventsPage = ({ data }) => (
  <Layout>
    <SectionHeader>Events</SectionHeader>
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
  </Layout>
);

export default EventsPage;

export const query = graphql`
  query EventsQuery {
    allMeetupEvent(sort: { order: DESC, fields: local_date }) {
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
