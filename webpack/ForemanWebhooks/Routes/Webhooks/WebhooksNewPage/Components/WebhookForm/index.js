import { connect } from 'react-redux';

import { submitForm } from 'foremanReact/redux/actions/common/forms';

import WebhookForm from './WebhookForm';

const mapStateToProps = (state, { controller }) => ({
  initialValues: {
    name: 'asdf',
    enabled: true,
    verify_ssl: true,
    target_url: 'http://example.com',
    http_method: 'http',
    http_content_type: 'application/json'
  },
});

const mapDispatchToProps = {
  submitForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(WebhookForm);