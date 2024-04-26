import * as yup from 'yup';

const contactFormSchema = yup.object().shape({
  first_name_584c: yup.string().required('First name is required'),
  last_name_51ee: yup.string().required('Last name is required'),
  email_bd82: yup.string().email('Invalid email').required('Email is required'),
  long_answer_afda: yup.string().required('Message is required'),
});

export default contactFormSchema;