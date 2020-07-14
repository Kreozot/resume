import React, { useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import sortBy from 'lodash/sortBy';

import Employment from './Employment';
import Education from './Education';
import Course from './Course';

import styles from './Timeline.module.scss';

export default function Timeline(props) {
  const data = useStaticQuery(graphql`
    query TimelineQuery {
      allContentfulEducation {
        nodes {
          id
          institution
          endDate
          degree
          startDate
          speciality
          internal {
            type
          }
        }
      }
      allContentfulCourse {
        nodes {
          id
          title
          startDate
          hours
          description {
            json
          }
          internal {
            type
          }
        }
      }
    }
  `);

  const items = useMemo(() => {
    return sortBy([
      ...data.allContentfulEducation.nodes,
      ...data.allContentfulCourse.nodes,
    ], (item) => 0 - new Date(item.startDate));
  }, [data]);

  return (
    <VerticalTimeline animate={ true } className={ styles.container }>
      { items.map((item) => {
        if (item.internal.type === 'ContentfulEducation') {
          return <Education education={ item } key={ item.id }/>;
        }
        if (item.internal.type === 'ContentfulCourse') {
          return <Course course={ item } key={ item.id }/>;
        }
      }) }
    </VerticalTimeline>
  );
}
