import React from 'react';

import styles from './Section.module.scss';

export default function Section(props) {
  const {
    title,
    children,
    className = '',
    outerClassName = '',
  } = props;

  return (
    <div className={ `${ outerClassName } ${ styles.container }` }>
      <h2 className={ styles.title }>
        { title }
      </h2>
      <div className={ `${ className } ${ styles.content }` }>
        { children }
      </div>
    </div>
  )
}
