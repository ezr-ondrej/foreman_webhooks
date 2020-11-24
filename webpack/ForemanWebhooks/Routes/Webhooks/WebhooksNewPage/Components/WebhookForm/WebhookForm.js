import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Field as FormikField } from 'formik';

import { translate as __ } from 'foremanReact/common/I18n';
import ForemanForm from 'foremanReact/components/common/forms/ForemanForm';
import TextField from 'foremanReact/components/common/forms/TextField';
import FormField from 'foremanReact/components/common/forms/FormField';
import Select from 'foremanReact/components/common/forms/Select';

import { WEBHOOKS_PATH } from '../../../constants';

const webhookFormSchema = Yup.object().shape({
  name: Yup.string().required(__('is required')),
  target_url: Yup.string().url().required(__('is required')),
  http_method: Yup.string().required(__('is required')),
});

const WebhookForm = ({
  url,
  submitForm,
  controller,
  onCancel,
  initialValues,
  history,
}) => {
  const handleSubmit = async (values, actions) => {
    await submitForm({
      url,
      values: { ...values, controller },
      item: 'Webhook',
      message: __('Webhook was successfully created.'),
    }).then(args => {
      history.replace({ pathname: WEBHOOKS_PATH });
    });;
  };

  return (
    <ForemanForm
      onSubmit={(values, actions) => handleSubmit(values, actions)}
      initialValues={initialValues}
      validationSchema={webhookFormSchema}
      onCancel={onCancel}
    >
      <TextField
        name="name" type="text" required="true" label={__('Name')}
      />
      <FormikField name='target_url'>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <FormField
            {...field}
            type="text"
            label={__('Target URL')}
            labelHelp={__('Target URL that should be called by Foreman')}
          />
        )}
      </FormikField>
      <TextField
        name="user" type="text" label={__('User')}
        labelHelp={__('Authentication credentials')}
      />
      <TextField
        name="http_content_type" type="text" label={__('HTTP Content Type')} />
      <TextField name="enabled" type="checkbox" label={__('Enabled')} />
      <TextField name="verify_ssl" type="checkbox" label={__('Verify SSL')} />
      <TextField
        name="ssl_ca_certs"
        type="textarea"
        label={__('X509 Certification Authorities')}
        inputSizeClass="col-md-8"
        rows={10}
        placeholder={__("Optional CAs in PEM format concatenated to verify the receiver's SSL certificate.")}
      />
    </ForemanForm>
  );
};

WebhookForm.propTypes = {
  url: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  controller: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default WebhookForm;
