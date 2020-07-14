import React from 'react';
import Zoom from 'react-reveal/Zoom';

import styles from './Section.module.scss';

export default function Section(props) {
  const { title, children, className } = props;

  return (
    <Zoom>
      <div className={ styles.container }>
        <h2 className={ styles.title }>
          { title }
        </h2>
        <div className={ `${ className } ${ styles.content }` }>
          { children }
        </div>
      </div>
    </Zoom>
  )
}
