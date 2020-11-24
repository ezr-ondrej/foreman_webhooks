import React from 'react';
import PropTypes from 'prop-types';

import { translate as __ } from 'foremanReact/common/I18n';
import PageLayout from 'foremanReact/routes/common/PageLayout/PageLayout';
import history from 'foremanReact/history';
import { foremanUrl } from 'foremanReact/common/helpers';

import WebhookForm from './Components/WebhookForm';
import { WEBHOOKS_PATH } from '../constants';

const WebhooksNewPage = ({
  isLoading,
  hasData,
  hasError,
  canCreate,
  toasts,
  fetchAndPush,
  ...props
}) => {
  const getBreadcrumbs = () => ({
    breadcrumbItems: [
      { caption: __('Webhooks'), url: WEBHOOKS_PATH },
      { caption: __('Create Webhook'), url: `${WEBHOOKS_PATH}/new` },
    ],
  });

  return (
    <PageLayout
      header={__('Create Webhooks')}
      searchable={false}
      isLoading={isLoading && hasData}
      breadcrumbOptions={getBreadcrumbs()}
      toastNotifications={toasts}
    >
      <WebhookForm
        url={foremanUrl(`/api${WEBHOOKS_PATH}`)}
        controller="webhooks"
        onCancel={fetchAndPush}
        history={history}
      />
    </PageLayout>
  );
};

WebhooksNewPage.propTypes = {
  fetchAndPush: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasData: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  canCreate: PropTypes.bool.isRequired,
  toasts: PropTypes.array.isRequired,
};

export default WebhooksNewPage;
