import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from 'date-fns';
import SchoolIcon from '@material-ui/icons/School';

import styles from './Timeline.module.scss';

export default function Education(props) {
  const {
    education,
  } = props;

  const dateStr = `${ format(new Date(education.startDate), 'MMMM, yyyy') } — ${ format(new Date(education.endDate), 'MMMM, yyyy') }`;

  return (
    <VerticalTimelineElement
      date={ dateStr }
      className={ styles.itemEducation }
      position="right"
      icon={ <SchoolIcon/> }
      iconClassName={ styles.icon }
    >
      <h3 className={ styles.title }>{ education.degree } in { education.speciality }</h3>
      <h4 className={ styles.subtitle }>{ education.institution }</h4>
    </VerticalTimelineElement>
  )
}
