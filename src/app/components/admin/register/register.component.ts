import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  // user: User;
  constructor(private formBuilder: FormBuilder,
              private adminService: AdminService,
              private router: Router ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  registerUser(): any {
    this.adminService.register(this.registerForm.value).subscribe( data => {
      console.log(data);
      this.registerForm.reset();
      this.router.navigateByUrl('/home');
    });
  }
}
