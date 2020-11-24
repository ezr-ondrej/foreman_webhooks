import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';

import { useForemanContext } from 'foremanReact/Root/Context/ForemanContext';

import WebhooksNewPage from './WebhooksNewPage';
import * as actions from '../WebhooksPageActions';

import {
  selectHasData,
  selectHasError,
  selectIsLoading,
  selectCanCreate,
} from '../WebhooksPageSelectors';

const mapStateToProps = state => ({
  isLoading: selectIsLoading(state),
  hasData: selectHasData(state),
  hasError: selectHasError(state),
  canCreate: selectCanCreate(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const callWithToastsContext = Component => props => {
  const { toasts } = useForemanContext();
  return <Component {...props} toasts={toasts} />;
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  callWithToastsContext
)(WebhooksNewPage);
