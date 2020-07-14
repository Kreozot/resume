import React, { useMemo } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

import StackOverflow from 'images/icon-stackoverflow.svg';

import styles from './Links.module.scss';

export default function Link(props) {
  const { item } = props;

  const Icon = useMemo(() => {
    if (item.type === 'linkedin') {
      return LinkedInIcon;
    } else if (item.type === 'facebook') {
      return FacebookIcon;
    } else if (item.type === 'github') {
      return GitHubIcon;
    } else if (item.type === 'stackoverflow') {
      return StackOverflow;
    } else {
      return LinkIcon;
    }
  }, [item.type]);

  return (
    <div className={ styles.item }>
      <a className={ styles.link } href={ item.url } target="_blank" rel="noreferrer">
        <div className={ styles.icon }>
          <Icon/>
        </div>
        <span className={ styles.title }>{ item.title }</span>
      </a>
    </div>
  )
}
