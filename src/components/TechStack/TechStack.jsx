import React from 'react';

import styles from './TechStack.module.scss';

export default function TechStack(props) {
  const { techStack } = props;

  if (!techStack) {
    return null;
  }

  return (
    <div className={ styles.techStack }>
      { techStack.map((item) => (
        <div className={ styles.techStackItem } key={ item }>
          { item }
        </div>
      )) }
    </div>
  )
}
