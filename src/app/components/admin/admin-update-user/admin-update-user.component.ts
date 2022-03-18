import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models';
import {AuthService} from '../../../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../../services/user.service';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-admin-update-user',
  templateUrl: './admin-update-user.component.html',
  styleUrls: ['./admin-update-user.component.css']
})
export class AdminUpdateUserComponent implements OnInit {
  userForm: FormGroup;
  user: User;
  userId: string;
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private adminService: AdminService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });

    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
    this.userService.getInfosUser(+this.userId).subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  updateUser(): any {
    this.userService.updateUser(+this.userId, this.userForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/profile');
    });
  }


}
