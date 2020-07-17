import React, { useMemo } from 'react';

import StackOverflow from 'images/icon-stackoverflow.svg';
import GitHubIcon from 'images/icon-github.svg';
import FacebookIcon from 'images/icon-facebook.svg';
import LinkedInIcon from 'images/icon-linkedin.svg';

import styles from './Link.module.scss';

export default function Link(props) {
  const { url, title, type, className } = props;

  const Icon = useMemo(() => {
    if (type === 'linkedin') {
      return LinkedInIcon;
    } else if (type === 'facebook') {
      return FacebookIcon;
    } else if (type === 'github') {
      return GitHubIcon;
    } else if (type === 'stackoverflow') {
      return StackOverflow;
    } else {
      return null;
    }
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
  )
}
