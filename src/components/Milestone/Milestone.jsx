import React, { useMemo } from 'react';
import { format } from 'date-fns';

import RichText from 'components/RichText';
import TechStack from 'components/TechStack';

import styles from './Milestone.module.scss';

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
      <TechStack techStack={ techStack }/>
    </div>
  )
}
