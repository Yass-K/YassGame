import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin.service';
import {User} from '../../../models';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  usersInfos: any;
  usersTotal: any;
  userId: number;
  gamesTotal: any;

  constructor(private adminService: AdminService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.adminService.getInfosUsers().subscribe( data => {
      this.usersInfos = data;
      this.usersTotal = data.length;
    });
  }

  logout(): any {
    this.authService.logout();
  }

  deleteUser(id: number): any {
    this.adminService.deleteUser(id).subscribe(() => {
      location.reload();
    });
  }
}
