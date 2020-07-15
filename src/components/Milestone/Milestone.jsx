import React, { useMemo } from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from 'date-fns';

import { formatText } from 'common/typograf';
import RichText from 'components/RichText';

import styles from './Milestone.module.scss';

const richTextRenderOptions = {
  renderText: (text) => formatText(text)
};

export default function Milestone(props) {
  const {
    startDate,
    endDate,
    title,
    subtitle,
    descriptionJson,
    techStack,
  } = props;

  const dateStr = useMemo(() => {
    if (endDate) {
      return `${ format(new Date(startDate), 'MMMM, yyyy') } — ${ format(new Date(endDate), 'MMMM, yyyy') }`;
    }
    return format(new Date(startDate), 'MMMM, yyyy');
  }, [startDate, endDate]);

  return (
    <div className={ styles.item }>
      <div className={ styles.header }>
        <div>
          <h3 className={ styles.title }>{ title }</h3>
          { Boolean(subtitle) &&
            <h4 className={ styles.subtitle }>{ subtitle }</h4>
          }
        </div>
        <div className={ styles.dates }>
          { dateStr }
        </div>
      </div>
      { Boolean(descriptionJson) &&
        <div className={ styles.description }>
          <RichText textJson={ descriptionJson }/>
        </div>
      }
      { Boolean(techStack) &&
        <div className={ styles.techStack }>
          { techStack.map((item) => (
            <div className={ styles.techStackItem } key={ item }>
              { item }
            </div>
          )) }
        </div>
      }
    </div>
  )
}
