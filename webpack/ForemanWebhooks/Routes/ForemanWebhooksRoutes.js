import React from 'react';
import WebhooksIndexPage from './Webhooks/WebhooksIndexPage';
import WebhooksNewPage from './Webhooks/WebhooksNewPage';

const ForemanWebhooksRoutes = [
  {
    path: '/webhooks',
    exact: true,
    render: props => <WebhooksIndexPage {...props} />,
  },
  {
    path: '/webhooks/new',
    exact: true,
    render: props => <WebhooksNewPage {...props} />,
  },
];

export default ForemanWebhooksRoutes;
