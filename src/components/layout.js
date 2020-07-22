import React from "react";

import GitHubCorner from 'components/common/GitHubCorner';
import Seo from './Seo';

import "./scheme.scss";
import "./Layout.scss";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <main className="main">
        { children }
      </main>
      <GitHubCorner/>
      <Seo/>
    </>
  )
}
