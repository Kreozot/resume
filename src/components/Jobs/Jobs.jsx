import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

import JobsItem from './JobsItem';
import Section from 'components/Section';

export default function Jobs(props) {
  const data = useStaticQuery(graphql`
    query JobsQuery {
      allContentfulEmployment {
        nodes {
          id
          jobTitle
          startDate
          url
          endDate
          employer
          techStack
          name
          description {
            json
          }
          logo {
            file {
              url
            }
          }
        }
      }
    }
  `);

  const items = useMemo(() => {
    return sortBy(data.allContentfulEmployment.nodes, (item) => 0 - new Date(item.startDate));
  }, [data]);

  return (
    <Section title="Jobs history">
      { items.map((item) => (
        <JobsItem item={ item } key={ item.id }/>
      )) }
    </Section>
  );
}
