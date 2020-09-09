import React from 'react';

export default function InlineSvg(props) {
  const { content } = props;

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}
