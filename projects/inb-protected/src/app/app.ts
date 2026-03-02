import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from 'inb-common-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class ProtectedLayout {
  protected readonly title = signal('inb-protected');
  public auth = inject(AuthService);
  ngOnInit() {
    console.log(this.auth.user());
  }
}
