import React from 'react';

import Milestone from 'components/Milestone';

export default function MainEducationItem(props) {
  const { item } = props;

  return (
    <Milestone
      title={ `${ item.degree } in ${ item.speciality }` }
      subtitle={ item.institution }
      startDate={ item.startDate }
      endDate={ item.endDate }
    />
  )
}
