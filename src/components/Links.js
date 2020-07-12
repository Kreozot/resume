import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Link from '../components/Link';

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
    <div>
      { data.allContentfulLink.nodes.map((link) => (
        <Link link={ link } key={ link.id }/>
      )) }
    </div>
  );
}

