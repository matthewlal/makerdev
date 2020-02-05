import React from "react";
import moment from "moment";

const MeetupCard = props => (
  <div key={props.id} className="showcase__item">
    <figure className="card">
      <a href={props.link} className="card__image">
        <img alt={props.name} src={props.featured_photo} />
      </a>
      <figcaption className="card__caption">
        <p>
          {moment(`${props.local_date},${props.local_time}`).format(
            "ddd, MMM DD, h:mm A"
          )}
        </p>
        <br />
        <h6 className="card__title">
          <a href={props.link}>{props.name}</a>
        </h6>
        <div className="card__description">
          <a href={`https://meetup.com/${props.group_urlname}`}>
            Meetup: {props.group_name}
          </a>
          <br />
          <br />
          <strong>
            <p>{props.venue_name}</p>
          </strong>
          <p>
            {props.venue_address_1}, {props.venue_city}, {props.venue_state},{" "}
            {props.venue_localized_country_name}, {props.venue_zip}
          </p>
          <br />
          <p>Attendees: {props.yes_rsvp_count}</p>
          <p>Status: {props.status}</p>
        </div>
      </figcaption>
    </figure>
  </div>
);

export default MeetupCard;
