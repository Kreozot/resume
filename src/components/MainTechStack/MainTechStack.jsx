import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

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

  const items = useMemo(() => sortBy(data.allContentfulMainTechStack.nodes, 'order'), []);

  return (
    <div className={ styles.container }>
      { items.map((item) => (
        <MainTechStackItem item={ item } key={ item.id }/>
      )) }
    </div>
  )
}
