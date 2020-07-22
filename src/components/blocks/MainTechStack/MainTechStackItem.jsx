import React, { useMemo } from 'react';

import styles from './MainTechStack.module.scss';
import ReactIcon from 'images/icon-react.svg';
import JSIcon from 'images/icon-js.svg';
import NodeJSIcon from 'images/icon-nodejs.svg';
import ReduxIcon from 'images/icon-redux.svg';

export default function MainTechStackItem(props) {
  const { item } = props;

  const Icon = useMemo(() => {
    console.log(ReactIcon);
    if (item.name === 'react') {
      return ReactIcon;
    } else if (item.name === 'js') {
      return JSIcon;
    } else if (item.name === 'nodejs') {
      return NodeJSIcon;
    } else if (item.name === 'redux') {
      return ReduxIcon;
    } else {
      return null;
    }
  }, [item.name]);

  return (
    <div className={ styles.item }>
      <div className={ styles.icon }>
        { Boolean(Icon) && <Icon/> }
      </div>
      <div className={ styles.title }>
        { item.title }
      </div>
    </div>
  )
}
