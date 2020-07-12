import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from 'date-fns';
import SchoolIcon from '@material-ui/icons/School';

export default function Education(props) {
  const {
    education,
  } = props;

  const dateStr = `${ format(new Date(education.startDate), 'MMMM, yyyy') } — ${ format(new Date(education.endDate), 'MMMM, yyyy') }`;

  return (
    <VerticalTimelineElement
      date={ dateStr }
      className="vertical-timeline-element--education"
      position="right"
      icon={ <SchoolIcon/> }
    >
      <h3 className="vertical-timeline-element-title">{ education.institution }</h3>
      <h4 className="vertical-timeline-element-subtitle">{ education.degree } in { education.speciality }</h4>
    </VerticalTimelineElement>
  )
}
