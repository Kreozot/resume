import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { format } from 'date-fns';
import WorkIcon from '@material-ui/icons/Work';

import { formatText } from '../../common/typograf';

export default function Employment(props) {
  const {
    employment,
  } = props;

  const dateStr = `${ format(new Date(employment.startDate), 'MMMM, yyyy') } — ${ format(new Date(employment.endDate), 'MMMM, yyyy') }`;

  const options = {
    renderText: (text) => formatText(text)
  };

  return (
    <VerticalTimelineElement
      date={ dateStr }
      className="vertical-timeline-element--work"
      position="left"
      icon={ <WorkIcon/> }
    >
      <h3 className="vertical-timeline-element-title">{ employment.jobTitle }</h3>
      <h4 className="vertical-timeline-element-subtitle">{ employment.employer }</h4>
      { documentToReactComponents(employment.description.json, options) }
    </VerticalTimelineElement>
  )
}
