import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { format } from 'date-fns';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

import { formatText } from '../../common/typograf';

import styles from './Timeline.module.scss';

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
      className={ styles.itemCourse }
      position="right"
      icon={ <CastForEducationIcon/> }
      iconClassName={ styles.icon }
    >
      <h3 className={ styles.title }>{ course.title }</h3>
      <h4 className={ styles.subtitle }>~{ course.hours } hours</h4>
      <div className={ styles.description }>
        { documentToReactComponents(course.description.json, options) }
      </div>
    </VerticalTimelineElement>
  )
}
