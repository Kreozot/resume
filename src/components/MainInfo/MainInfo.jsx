import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import RichText from 'components/RichText';
import Section from 'components/Section';

import styles from './MainInfo.module.scss';

export default function MainInfo(props) {
  const data = useStaticQuery(graphql`
    query InfoQuery {
      contentfulInfo {
        name
        title
        mainInfo
        about {
          json
        }
      }
    }
  `);

  return (
    <>
      <div className={ styles.container }>
        <h1 className={ styles.name }>
          { data.contentfulInfo.name }
        </h1>
        <h2 className={ styles.title }>
          { data.contentfulInfo.title }
        </h2>
        <div>
          { data.contentfulInfo.mainInfo }
        </div>
      </div>
      <Section title="About">
        <RichText textJson={ data.contentfulInfo.about.json }/>
      </Section>
    </>
  )
}
