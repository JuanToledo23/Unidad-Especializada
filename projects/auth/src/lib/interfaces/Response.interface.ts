import { LoginResponseRespuesta } from './LoginResponseRespuesta.interface';
import { MenuOption } from './MenuOption.interface';

export interface Response {
  codigo: number;
  descripcion: string;
  success: boolean;
}

export interface CoreResponse {
  message: string;
  code: string;
  type: boolean;
  serverDate: string;
}

export interface LoginResponse extends Response {
  respuesta: LoginResponseRespuesta;
}

export interface MenuOptionResponse extends Response {
  respuesta: MenuOption[];
}
