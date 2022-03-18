import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group( {
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): any {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)
        .subscribe((response: any) => {
          const token: any = jwt_decode(response.token);
          this.authService.setToken(response.token);
          this.authService.isConnected();
          this.authService.isAnAdmin();
          this.authService.checkRoles(token.roles);
          if (this.authService.isAnAdmin()){
            this.router.navigate(['admin-profile']);
          }
          else {
            this.router.navigate(['/profile']);
          }
        });
    }
  }
}
