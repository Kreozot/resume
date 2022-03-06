import React from 'react';

import styles from './MainTechStack.module.scss';
import InlineSvg from 'components/common/InlineSvg';

export default function MainTechStackItem(props) {
  const { item } = props;

  return (
    <div className={ styles.item }>
      <InlineSvg content={ item.logo.svg.content } className={ styles.icon }/>
      <div className={ styles.title }>
        { item.title }
      </div>
    </div>
  )
}
