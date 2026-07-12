import {Injectable} from '@angular/core';

@Injectable()

export class InstanceIdService{
  id = Math.random().toString(36).substring(2, 8);   // random id per instance
}