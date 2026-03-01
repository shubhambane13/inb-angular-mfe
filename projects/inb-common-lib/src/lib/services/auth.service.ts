import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Using Angular Signals for modern state management in 2026
  private _user = signal<{ name: string; role: string } | null>(null);
  user = this._user.asReadonly();
    xyz = "qwerty";
  login(name: string) {
    this._user.set({ name, role: 'Admin' });
    console.log('User logged in globally:', name);
  }
}