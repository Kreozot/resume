import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import RichText from 'components/common/RichText';
import Section from 'components/common/Section';

import styles from './About.module.scss';

export default function About(props) {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      contentfulInfo {
        about {
          json
        }
      }
    }
  `);

  return (
    <Section title="About" outerClassName={ styles.section }>
      <RichText textJson={ data.contentfulInfo.about.json }/>
    </Section>
  )
}
