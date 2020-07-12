import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { format } from 'date-fns';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

import { formatText } from '../../common/typograf';

export default function Course(props) {
  const {
    course,
  } = props;

  const dateStr = format(new Date(course.startDate), 'MMMM, yyyy');

  const options = {
    renderText: (text) => formatText(text)
  };

  return (
    <VerticalTimelineElement
      date={ dateStr }
      className="vertical-timeline-element--course"
      position="right"
      icon={ <CastForEducationIcon/> }
    >
      <h3 className="vertical-timeline-element-title">{ course.title }</h3>
      { documentToReactComponents(course.description.json, options) }
    </VerticalTimelineElement>
  )
}
