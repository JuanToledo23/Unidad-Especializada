import { Injectable } from '@angular/core';
import { Env } from '../../interfaces/env.interface';

import { __DEV, __PROD} from './env';

@Injectable({
  providedIn: 'root'
})
export class EnvAuthService {
  constructor() { }

  /**
   * @param mode can be should true or false when
   * - false return properties for enviroment mode development
   * - true  return properties for enviroment mode production
   */
  getProperties(mode: boolean = false): Env {
    return mode ? __PROD : __DEV;
  }
}
