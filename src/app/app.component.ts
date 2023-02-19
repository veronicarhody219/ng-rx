import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from './interface/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'learn-ngrx';
  userData: any;
  constructor(private userService: UserService, private dialog: MatDialog) {}
  ngOnInit(): void {}
  // getAll() {
  //   this.userService.getUsers().subscribe((user) => {
  //     this.userData = user;
  //   });
  // }
}
