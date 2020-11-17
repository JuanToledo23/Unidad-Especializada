import { CoreResponse } from './response.interface';
import { UserInformation } from './UserInformation.interface';

export interface LoginResponseRespuesta {
  response: CoreResponse;
  roleEstatus: number;
  tokenInformation: TokenInformation;
  userInformation: UserInformation;
}

interface TokenInformation {
  token: string;
  expirationDate: string;
}
