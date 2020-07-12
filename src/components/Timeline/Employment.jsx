import React from 'react';
import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types';
import { format } from 'date-fns';
import WorkIcon from '@material-ui/icons/Work';

import { formatText } from '../../common/typograf';

import styles from './Timeline.module.scss';

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
      className={ styles.itemEmployment }
      iconClassName={ styles.icon }
      position="left"
      icon={ <WorkIcon/> }
      iconClassName={ styles.icon }
    >
      <h3 className={ styles.title }>{ employment.jobTitle }</h3>
      <h4 className={ styles.subtitle }>{ employment.employer }</h4>
      <div className={ styles.description }>
        { documentToReactComponents(employment.description.json, options) }
      </div>
      <div className={ styles.techStack }>
        { employment.techStack.map((item) => (
          <div className={ styles.techStackItem }>
            { item }
          </div>
        )) }
      </div>
    </VerticalTimelineElement>
  )
}
