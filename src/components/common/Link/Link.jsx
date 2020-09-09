import React from 'react';

import InlineSvg from 'components/common/InlineSvg';

import styles from './Link.module.scss';

export default function Link(props) {
  const {
    url,
    title,
    icon,
    className = '',
  } = props;

  return (
    <div className={ `${ className } ${ styles.item }` }>
      <a className={ styles.link } href={ url } target="_blank" rel="noreferrer">
        <div className={ styles.icon }>
          <InlineSvg content={ icon }/>
        </div>
        <span className={ styles.title }>{ title }</span>
      </a>
    </div>
  );
}
