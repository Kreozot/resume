import React from 'react';

import RichText from 'components/RichText';
import TechStack from 'components/TechStack';
import Link from 'components/Link';

import styles from './Projects.module.scss';
import GitHubIcon from 'images/icon-github.svg';

export default function ProjectsItem(props) {
  const { item } = props;

  return (
    <div className={ styles.item }>
      <img src={ item.image.file.url } className={ styles.image } alt="screenshot"/>
      <div className={ styles.titleBlock }>
        <img src={ item.logo.file.url } className={ styles.logo } alt="logo"/>
        <h3 className={ styles.title }>
          { item.title }
        </h3>
      </div>
      <div className={ styles.description }>
        <RichText textJson={ item.description.json }/>
        { Boolean(item.sourceUrl) &&
          <Link
            className={ styles.sourceLink }
            url={ item.sourceUrl }
            type="github"
            title="View source at GitHub"
          />
        }
      </div>
      <TechStack techStack={ item.techStack }/>
    </div>
  )
}