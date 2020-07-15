import React from 'react';

import Milestone from 'components/Milestone';

export default function JobsItem(props) {
  const { item } = props;

  return (
    <Milestone
      title={ item.jobTitle }
      subtitle={ item.employer }
      descriptionJson={ item.description.json }
      startDate={ item.startDate }
      endDate={ item.endDate }
      techStack={ item.techStack }
    />
  )
}
