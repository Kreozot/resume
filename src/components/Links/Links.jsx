import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Section from 'components/Section';
import Link from 'components/Link';

import styles from './Links.module.scss';

export default function Links() {
  const data = useStaticQuery(graphql`
    query LinksQuery {
      allContentfulLink {
        nodes {
          url
          title
          type
          id
        }
      }
    }
  `);

  return (
    <Section title="Links" className={ styles.container }>
      { data.allContentfulLink.nodes.map((item) => (
        <Link
          className={ styles.item }
          url={ item.url }
          title={ item.title }
          type={ item.type }
          key={ item.id }
        />
      )) }
    </Section>
  );
}

