import { InjectionToken } from '@angular/core';
import { User } from '../models/user.model';

/*
  InjectionToken is a generic class provided by Angular for creating custom injection tokens.
*/
export const STATUS_INPUT = new InjectionToken<User>('STATUS_INPUT');
