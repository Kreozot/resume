import React from 'react';

export default function InlineSvg(props) {
  const { content, className } = props;

  return (
    <div dangerouslySetInnerHTML={{ __html: content }} className={ className } />
  )
}
