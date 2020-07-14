import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LinksItem from './LinksItem';
import Section from 'components/Section';

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
      { data.allContentfulLink.nodes.map((link) => (
        <LinksItem item={ link } key={ link.id }/>
      )) }
    </Section>
  );
}

