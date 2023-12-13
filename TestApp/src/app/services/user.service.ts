import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userName: string = `Lorem Ipsum ${Math.round(Math.random() * 1000)}`; 

  constructor() {
    console.log('UserService init');
  }

  getUserName() {
    return this._userName;
  }
}
