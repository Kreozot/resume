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
    Icon,
  } = props;

  const dateStr = useMemo(() => {
    if (endDate) {
      return (
        <>
          <div className={ styles.date }>
            { format(new Date(startDate), 'MMMM, yyyy — ') }
          </div>
          <div className={ styles.date }>
            { format(new Date(endDate), 'MMMM, yyyy') }
          </div>
        </>
      );
    }
    return (
      <div className={ styles.date }>
        { format(new Date(startDate), 'MMMM, yyyy') }
      </div>
    );
  }, [startDate, endDate]);

  return (
    <div className={ styles.item }>
      <div className={ styles.header }>
        <div className={ styles.jobBlock }>
          { Boolean(Icon) &&
            <div className={ styles.icon }>
              <Icon/>
            </div>
          }
          <div className={ styles.jobInfo }>
            <h3 className={ styles.title }>{ title }</h3>
            { Boolean(subtitle) &&
              <h4 className={ styles.subtitle }>{ subtitle }</h4>
            }
          </div>
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
