import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private _token = signal<string>('');
  token = this._token.asReadonly();
  setToken(token: string) {
    this._token.set(token);
  }
}