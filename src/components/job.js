import React from "react";
import { FormattedNumber,  FormattedDate, FormattedMessage  } from 'react-intl';

const Job = (props) => {

  const formattedSalary = props.offer.salary >= 1 ? (
    <span>
      <FormattedNumber value={props.offer.salary} />{" "}
      <FormattedMessage id={props.offer.salary === 1 ? "million" : "millions"} />
    </span>
  ) : (
    <FormattedNumber value={props.offer.salary} />
  );

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formattedSalary}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Job;
