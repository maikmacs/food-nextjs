import { PAYPAL_SUCESS } from '../constants/paypal';

import { createAction } from 'redux-actions';

export const paypalSucess = createAction(PAYPAL_SUCESS);
