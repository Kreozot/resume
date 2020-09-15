import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import RichText from 'components/common/RichText';
import Section from 'components/common/Section';

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
    <Section title="About">
      <RichText textJson={ data.contentfulInfo.about.json }/>
    </Section>
  )
}
