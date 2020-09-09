import React, { useMemo } from 'react';

import InlineSvg from 'components/common/InlineSvg';

import styles from './Link.module.scss';
import GitHubIcon from 'images/icon-github.svg';

const icons = {
  github: GitHubIcon,
};

export default function Link(props) {
  const {
    url,
    title,
    icon,
    type,
    className = '',
  } = props;

  const Icon = useMemo(() => {
    return icons[type] || null;
  }, [type]);

  return (
    <div className={ `${ className } ${ styles.item }` }>
      <a className={ styles.link } href={ url } target="_blank" rel="noreferrer">
        <div className={ styles.icon }>
          { Boolean(Icon)
            ? <Icon/>
            : <InlineSvg content={ icon }/>
          }
        </div>
        <span className={ styles.title }>{ title }</span>
      </a>
    </div>
  );
}
