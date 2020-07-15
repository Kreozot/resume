import React, { useMemo } from 'react';

import Milestone from 'components/Milestone';

import RutIcon from 'images/icon-rut.svg';

export default function MainEducationItem(props) {
  const { item } = props;

  const Icon = useMemo(() => {
    if (item.name === 'rut') {
      return RutIcon;
    } else {
      return null;
    }
  }, [item.name]);

  return (
    <Milestone
      title={ `${ item.degree } in ${ item.speciality }` }
      subtitle={ <a href={ item.url } target="_blank" rel="noreferrer">{ item.institution }</a> }
      startDate={ item.startDate }
      endDate={ item.endDate }
      Icon={ Icon }
    />
  )
}
