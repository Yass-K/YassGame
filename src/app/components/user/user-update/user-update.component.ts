import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models';
import {AuthService} from '../../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  userId: string;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });

    this.userId = localStorage.getItem('id');
    console.log(this.userId);
    this.userService.getInfosUser(+this.userId).subscribe(data => {
      this.user = data;
      console.log(data.username);
    });
  }

  updateUser(): any {
    this.userService.updateUser(+this.userId, this.userForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/profile');
    });
  }

}
