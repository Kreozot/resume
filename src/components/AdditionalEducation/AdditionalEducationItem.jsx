import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { format } from 'date-fns';
import WorkIcon from '@material-ui/icons/Work';

import { formatText } from 'common/typograf';

import styles from './AdditionalEducation.module.scss';

export default function AdditionalEducationItem(props) {
  const { item } = props;

  const dateStr = format(new Date(item.startDate), 'MMMM, yyyy');

  const options = {
    renderText: (text) => formatText(text)
  };

  return (
    <div className={ styles.item }>
      <h3 className={ styles.title }>{ item.title }</h3>
      <h4 className={ styles.subtitle }>~{ item.hours } hours</h4>
      <div className={ styles.description }>
        { documentToReactComponents(item.description.json, options) }
      </div>
    </div>
  )
}
