// Step 1: Import your component
import * as React from 'react'
import {Link} from "gatsby";
import FetchWrapper from '../components/fetch-wrapper';
import {startLoader, stopLoader} from '../components/helpers.js';
import Layout from '../components/layout';
import { pageStyles } from '../css/basecss';

const AboutPage = () => {
  return (
    <main style={pageStyles}>
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    </main>
  )
}
export default AboutPage