import React from 'react';

import Milestone from 'components/Milestone';

export default function MainEducationItem(props) {
  const { item } = props;

  return (
    <Milestone
      title={ `${ item.degree } in ${ item.speciality }` }
      subtitle={ <a href={ item.url } target="_blank" rel="noreferrer">{ item.institution }</a> }
      startDate={ item.startDate }
      endDate={ item.endDate }
      logo={ item.logo.file.url }
    />
  )
}
