
// Validátor vstupních dat leadu
import * as yup from 'yup';

export const leadSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required(),
  status: yup.string().oneOf(['standby', 'done']),
});
