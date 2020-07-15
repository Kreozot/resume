import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

import AdditionalEducationItem from './AdditionalEducationItem';
import Section from 'components/Section';

export default function AdditionalEducation(props) {
  const data = useStaticQuery(graphql`
    query AdditionalEducationQuery {
      allContentfulCourse {
        nodes {
          id
          title
          startDate
          hours
          description {
            json
          }
        }
      }
    }
  `);

  const items = useMemo(() => {
    return sortBy(data.allContentfulCourse.nodes, (item) => 0 - new Date(item.startDate));
  }, [data]);

  return (
    <Section title="Additional education">
      { items.map((item) => (
        <AdditionalEducationItem item={ item } key={ item.id }/>
      )) }
    </Section>
  );
}
