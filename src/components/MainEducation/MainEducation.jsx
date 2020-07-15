import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

import MainEducationItem from './MainEducationItem';
import Section from 'components/Section';

export default function MainEducation(props) {
  const data = useStaticQuery(graphql`
    query MainEducationQuery {
      allContentfulEducation {
        nodes {
          id
          institution
          endDate
          degree
          startDate
          speciality
          url
          name
        }
      }
    }
  `);

  const items = useMemo(() => {
    return sortBy(data.allContentfulEducation.nodes, (item) => 0 - new Date(item.startDate));
  }, [data]);

  return (
    <Section title="Education">
      { items.map((item) => (
        <MainEducationItem item={ item } key={ item.id }/>
      )) }
    </Section>
  );
}
