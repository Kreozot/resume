import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { format } from 'date-fns';
import WorkIcon from '@material-ui/icons/Work';

import { formatText } from 'common/typograf';

import styles from './MainEducation.module.scss';

export default function MainEducationItem(props) {
  const { item } = props;

  const dateStr = `${ format(new Date(item.startDate), 'MMMM, yyyy') } — ${ format(new Date(item.endDate), 'MMMM, yyyy') }`;

  const options = {
    renderText: (text) => formatText(text)
  };

  return (
    <div className={ styles.item }>
      <h3 className={ styles.title }>{ item.degree } in { item.speciality }</h3>
      <h4 className={ styles.subtitle }>{ item.institution }</h4>
    </div>
  )
}
