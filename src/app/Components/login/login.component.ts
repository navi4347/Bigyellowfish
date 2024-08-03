import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/Auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;

    this.authService.login(username, password).subscribe(
      (response: any) => {
        const token = response.token;
        this.loginForm.reset();
        sessionStorage.setItem('authToken', token);
        this.router.navigate(['/home']).then(success => {
          if (success) {
            console.log('Navigation to home was successful!');
          } else {
            console.error('Navigation to home failed.');
          }
        });
      },
      error => {
        this.errorMessage = error;
        this.loginForm.reset(); 
      }
    );
  }
}
