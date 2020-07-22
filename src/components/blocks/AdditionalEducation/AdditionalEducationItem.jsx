import React from 'react';

import Milestone from 'components/common/Milestone';

import styles from './AdditionalEducation.module.scss';

export default function AdditionalEducationItem(props) {
  const { item } = props;

  return (
    <Milestone
      title={ item.title }
      subtitle={ `~${ item.hours } hours` }
      descriptionJson={ item.description.json }
      startDate={ item.startDate }
      className={ styles.item }
    />
  )
}
