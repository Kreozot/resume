import React from 'react';

import Layout from 'components/layout';
import MainTechStack from 'components/MainTechStack';
import Jobs from 'components/Jobs';
import Projects from 'components/Projects';
import MainEducation from 'components/MainEducation';
import AdditionalEducation from 'components/AdditionalEducation';
import Links from 'components/Links';
import MainInfo from 'components/MainInfo';

export default function IndexPage() {

  return (
    <Layout>
      <MainInfo/>
      <MainTechStack/>
      <Jobs/>
      <MainEducation/>
      <AdditionalEducation/>
      <Projects/>
      <Links/>
    </Layout>
  );
}

