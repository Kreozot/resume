import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

import Section from 'components/common/Section';
import MainTechStackItem from './MainTechStackItem';

import styles from './MainTechStack.module.scss';

export default function MainTechStack(props) {
  const data = useStaticQuery(graphql`
    query MainTechStackQuery {
      allContentfulMainTechStack {
        nodes {
          id
          title
          name
          order
        }
      }
    }
  `);

  const items = useMemo(() => sortBy(data.allContentfulMainTechStack.nodes, 'order'), [data]);

  return (
    <Section className={ styles.container } title="Main tech stack">
      { items.map((item) => (
        <MainTechStackItem item={ item } key={ item.id }/>
      )) }
    </Section>
  )
}
