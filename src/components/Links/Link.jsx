import React, { useMemo } from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

import styles from './Link.module.scss';

export default function Link(props) {
  const { link } = props;

  const Icon = useMemo(() => {
    if (link.type === 'linkedin') {
      return LinkedInIcon;
    } else if (link.type === 'facebook') {
      return FacebookIcon;
    } else if (link.type === 'github') {
      return GitHubIcon;
    } else {
      return LinkIcon;
    }
  }, [link.type]);

  return (
    <div className={ styles.container }>
      <a className={ styles.link } href={ link.url } target="_blank" rel="noreferrer">
        <Icon/>
        { link.title }
      </a>
    </div>
  )
}
