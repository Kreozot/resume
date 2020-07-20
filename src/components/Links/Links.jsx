import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

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
          order
        }
      }
    }
  `);

  const items = useMemo(() => sortBy(data.allContentfulLink.nodes, 'order'), [data]);

  return (
    <Section title="Links" className={ styles.container }>
      { items.map((item) => (
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

