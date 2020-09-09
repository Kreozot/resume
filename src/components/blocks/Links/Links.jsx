import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

import Section from 'components/common/Section';
import Link from 'components/common/Link';

import styles from './Links.module.scss';

export default function Links() {
  const data = useStaticQuery(graphql`
    query LinksQuery {
      allContentfulLink {
        nodes {
          url
          title
          id
          order
          logo {
            svg {
              content
            }
          }
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
          key={ item.id }
          icon={ item.logo.svg.content }
        />
      )) }
    </Section>
  );
}

