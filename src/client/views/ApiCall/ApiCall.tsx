import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { RootState } from '@redux/reducer';
import { getRequest } from '@redux/api/actions';
import { ApiStatus } from '@redux/api/types';

type MapState = {
  request: ApiStatus;
};

type Props = MapState & typeof mapDispatch;

const ApiCall: React.FC<Props> = ({ request, getRequest }) => {
  useEffect(() => {
    if (request.response) return;
    getRequest();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Test call</title>
        <meta name="description" content="API" />
      </Helmet>
      <h1>{request.fetching ? 'Loading...' : request.response}</h1>
    </div>
  );
};

const mapState = ({ request }: RootState) => ({
  request
});

const mapDispatch = { getRequest };

export default connect(
  mapState,
  mapDispatch
)(ApiCall);
