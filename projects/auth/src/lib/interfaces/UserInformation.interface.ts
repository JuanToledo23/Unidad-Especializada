import { MenuOptionResponse } from './response.interface';
import { Role } from './Role.interface';

export interface UserInformation {
  email?: string;
  employeeNumber: string;
  userName: string;
  paternalName: string;
  maternalName: string;
  menuOptions?: MenuOptionResponse;
  roles?: Role[];
}
