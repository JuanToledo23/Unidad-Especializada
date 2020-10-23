import { Env } from '../../interfaces/env.interface';

export const __DEV: Env = {
  CORE: '/UNEApi2/',
  MASTER_KEY_URL: 'https://authns.desadsi.gs/nidp/oauth/nam/authz?',
  CLIENT_ID: '237b25fa-ac23-43c8-bb9b-a3fb87568757',
  CLIENT_SECRET: '3oCIDuKGAsfDv3THBbviXk6U3HML9q5YLWrBNE3QVgFtD-I4fV_vc6dQLBGeYU7WBSF2i2_Cka8HIiy1NzxR5A',
  URL_REDIRECT: 'http://10.51.126.200:4200/auth',
  SCOPE: 'UNEFront',
  ACR_VALUES: 'gs/doblefactoridm/uri',
  LOGOUT: 'https://authns.desadsi.gs/nidp/jsp/logoutSuccess_latest.jsp?rp=http://10.51.126.200:4200/auth',
  POST_TOKEN_REQUEST: 'https://authns.desadsi.gs/nidp/oauth/nam/token'
};

export const __PROD: Env = {
  CORE: 'http://10.51.126.199:8080/UNEApi2/',
  MASTER_KEY_URL: 'https://authns.desadsi.gs/nidp/oauth/nam/authz?',
  CLIENT_ID: '237b25fa-ac23-43c8-bb9b-a3fb87568757',
  CLIENT_SECRET: '3oCIDuKGAsfDv3THBbviXk6U3HML9q5YLWrBNE3QVgFtD-I4fV_vc6dQLBGeYU7WBSF2i2_Cka8HIiy1NzxR5A',
  URL_REDIRECT: 'http://10.51.126.200:4200/auth',
  SCOPE: 'UNEFront',
  ACR_VALUES: 'gs/doblefactoridm/uri',
  // Este endpoint ya es funcionala para deslogear en productivo
  LOGOUT: 'https://auth.socio.gs/nidp/jsp/logoutSuccess_latest.jsp?rp=http://10.51.126.200:4200/auth',
  POST_TOKEN_REQUEST: ''
};

// Para generar el token: https://authns.desadsi.gs/nidp/oauth/nam/token
// Para enrolamiento: https://namns.desadsi.gs/EnrolamientoNAM/enrolamientoNAM
