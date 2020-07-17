import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import sortBy from 'lodash/sortBy';

import ProjectsItem from './ProjectsItem';
import Section from 'components/Section';

import styles from './Projects.module.scss';

export default function Projects(props) {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allContentfulProject {
        nodes {
          id
          releaseDate
          title
          url
          techStack
          sourceUrl
          description {
            json
          }
          logo {
            file {
              url
            }
          }
          image {
            file {
              url
            }
          }
        }
      }
    }
  `);

  const items = useMemo(() => {
    return sortBy(data.allContentfulProject.nodes, (item) => 0 - new Date(item.releaseDate));
  }, [data]);

  return (
    <Section title="Pet projects" className={ styles.container } outerClassName={ styles.section }>
      { items.map((item) => (
        <ProjectsItem item={ item } key={ item.id }/>
      )) }
    </Section>
  );
}
