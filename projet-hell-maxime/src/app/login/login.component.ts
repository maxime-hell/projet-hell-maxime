import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  login(): void {
    if (!this.authService.login(this.username, this.password)) {
      this.errorMessage = 'Identifiant ou mot de passe incorrect!';
    }
  }
}
