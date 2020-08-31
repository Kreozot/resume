import React from 'react';

import RichText from 'components/common/RichText';
import TechStack from 'components/common/TechStack';
import Link from 'components/common/Link';

import styles from './Projects.module.scss';

export default function ProjectsItem(props) {
  const { item } = props;

  return (
    <div className={ styles.item }>
      <div className={ styles.imageBlock }>
        <img src={ item.image.file.url } className={ styles.image } alt="screenshot"/>
      </div>
      <div className={ styles.titleBlock }>
        <img src={ item.logo.file.url } className={ styles.logo } alt="logo"/>
        <h3 className={ styles.title }>
          { item.url
            ? <a href={ item.url } target="_blank" rel="noreferrer">{ item.title }</a>
            : item.title
          }
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
