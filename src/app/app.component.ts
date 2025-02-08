import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestUserComponent } from './test-user/test-user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UsersService';
}
