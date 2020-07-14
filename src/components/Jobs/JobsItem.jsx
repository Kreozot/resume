import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { format } from 'date-fns';
import WorkIcon from '@material-ui/icons/Work';

import { formatText } from 'common/typograf';

import styles from './Jobs.module.scss';

export default function JobsItem(props) {
  const { item } = props;

  const dateStr = `${ format(new Date(item.startDate), 'MMMM, yyyy') } — ${ format(new Date(item.endDate), 'MMMM, yyyy') }`;

  const options = {
    renderText: (text) => formatText(text)
  };

  return (
    <div className={ styles.item }>
      <h3 className={ styles.title }>{ item.jobTitle }</h3>
      <h4 className={ styles.subtitle }>{ item.employer }</h4>
      <div className={ styles.description }>
        { documentToReactComponents(item.description.json, options) }
      </div>
      <div className={ styles.techStack }>
        { item.techStack.map((item) => (
          <div className={ styles.techStackItem } key={ item }>
            { item }
          </div>
        )) }
      </div>
    </div>
  )
}
