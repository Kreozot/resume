import React from 'react';

import styles from './MainInfo.module.scss';

export default function MainInfo(props) {

  return (
    <div className={ styles.container }>
      <h1 className={ styles.name }>
        Sergey Sharov
      </h1>
      <h2 className={ styles.title }>
        Senior JavaScript developer / Team lead
      </h2>
      <div>
        15 year of developer's career. 5 years of JavaScript programming.
      </div>
    </div>
  )
}
