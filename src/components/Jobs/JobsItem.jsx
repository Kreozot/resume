import React, { useMemo } from 'react';

import Milestone from 'components/Milestone';

import DomclickIcon from 'images/icon-domclick.svg';
import ZebraIcon from 'images/icon-zebra.svg';
import NiiasIcon from 'images/icon-niias.svg';

export default function JobsItem(props) {
  const { item } = props;

  const Icon = useMemo(() => {
    if (item.name === 'domclick') {
      return DomclickIcon;
    } else if (item.name === 'zebra') {
      return ZebraIcon;
    } else if (item.name === 'niias') {
      return NiiasIcon;
    } else {
      return null;
    }
  }, [item.name]);

  return (
    <Milestone
      title={ item.jobTitle }
      subtitle={ item.employer }
      descriptionJson={ item.description.json }
      startDate={ item.startDate }
      endDate={ item.endDate }
      techStack={ item.techStack }
      Icon={ Icon }
    />
  )
}
