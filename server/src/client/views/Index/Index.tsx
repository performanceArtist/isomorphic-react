import * as React from 'react';
import Helmet from 'react-helmet';

import TSTest from '@components/TSTest/TSTest';

const Index = () => (
  <div>
    <Helmet>
      <title>Homepage</title>
      <meta name="description" content="Hi there, stranger" />
    </Helmet>
    <h1>Home</h1>
    <div>
      <TSTest ownProp="Test" />
    </div>
  </div>
);

export default Index;
