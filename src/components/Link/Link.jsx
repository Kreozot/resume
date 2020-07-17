import React, { useMemo } from 'react';

import StackOverflow from 'images/icon-stackoverflow.svg';
import GitHubIcon from 'images/icon-github.svg';
import FacebookIcon from 'images/icon-facebook.svg';
import LinkedInIcon from 'images/icon-linkedin.svg';

import styles from './Link.module.scss';

const icons = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  github: GitHubIcon,
  stackoverflow: StackOverflow,
};

export default function Link(props) {
  const {
    url,
    title,
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
          <Icon/>
        </div>
        <span className={ styles.title }>{ title }</span>
      </a>
    </div>
  );
}
