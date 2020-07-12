import React from 'react';
// import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from 'components/layout';
import Links from 'components/Links';
import Timeline from 'components/Timeline';
// import Image from '../components/image';
// import SEO from '../components/seo';

export default function IndexPage() {

	return (
		<Layout>
			<Timeline/>
			<Links/>
		</Layout>
	);
}

