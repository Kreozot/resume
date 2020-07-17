import React from 'react';

import Milestone from 'components/Milestone';

export default function JobsItem(props) {
  const { item } = props;

  return (
    <Milestone
      title={ item.jobTitle }
      subtitle={ <a href={ item.url } target="_blank" rel="noreferrer">{ item.employer }</a> }
      descriptionJson={ item.description.json }
      startDate={ item.startDate }
      endDate={ item.endDate }
      techStack={ item.techStack }
      logo={ item.logo.file.url }
    />
  )
}
