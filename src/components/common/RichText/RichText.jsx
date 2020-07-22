import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { formatText } from 'common/format';

import styles from './RichText.module.scss';

const richTextRenderOptions = {
  renderText: (text) => formatText(text)
};

export default function RichText(props) {
  const { textJson } = props;

  return (
    <div className={ styles.rich }>
      { documentToReactComponents(textJson, richTextRenderOptions) }
    </div>
  )
}
