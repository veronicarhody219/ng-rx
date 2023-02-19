import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService, public dialog: MatDialog) {}
  users: any;
  editData: any;
  ngOnInit(): void {
    this.getUsers();
    this.userService.RequiredRefresh.subscribe((result) => {
      this.getUsers();
    });
  }
  getUsers() {
    this.userService.getUsers().subscribe((result) => {
      console.log(result);
      this.users = result;
    });
  }
  openDialog(id: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {id},
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  editUser(id: string) {
    this.openDialog(id)
  }
  deleteUser(id: string) {
    if (confirm('Do you want to delete?')) {
      this.userService.deleteUser(id).subscribe((result) => {
        this.getUsers();
      });
    }
  }
}
