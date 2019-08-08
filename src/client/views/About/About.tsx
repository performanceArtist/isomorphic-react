import * as React from 'react';
import Helmet from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About stuff" />
      </Helmet>
      <h1>About</h1>
    </div>
  );
};
export default About;
