import React from 'react';

import Layout from 'components/layout';
import MainTechStack from 'components/MainTechStack';
import Jobs from 'components/Jobs';
import Links from 'components/Links';
import Timeline from 'components/Timeline';
import MainInfo from 'components/MainInfo';

export default function IndexPage() {

  return (
    <Layout>
      <MainInfo/>
      <MainTechStack/>
      <Jobs/>
      <Timeline/>
      <Links/>
    </Layout>
  );
}

