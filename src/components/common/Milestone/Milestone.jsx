import React, { useMemo } from 'react';

import RichText from 'components/common/RichText';
import TechStack from 'components/common/TechStack';
import { formatDateMonth } from 'common/format';

import styles from './Milestone.module.scss';

export default function Milestone(props) {
  const {
    startDate,
    endDate,
    title,
    subtitle,
    descriptionJson,
    techStack,
    logo,
    className = '',
  } = props;

  const dateStr = useMemo(() => {
    if (endDate) {
      return (
        <>
          <div className={ styles.date }>
            { `${ formatDateMonth(startDate) } — ` }
          </div>
          <div className={ styles.date }>
            { formatDateMonth(endDate) }
          </div>
        </>
      );
    }
    return (
      <div className={ styles.date }>
        { formatDateMonth(startDate) }
      </div>
    );
  }, [startDate, endDate]);

  return (
    <div className={ `${ className } ${ styles.item }` }>
      <div className={ styles.header }>
        <div className={ styles.jobBlock }>
          { Boolean(logo) &&
            <img src={ logo } className={ styles.logo } alt="logo"/>
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
