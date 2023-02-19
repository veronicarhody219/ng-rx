import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  NgZone
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  editData: any;
  editMode: boolean = false;
  currentId: string;

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private ngZone: NgZone
  ) {}

  reactiveForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  onNoClick(): void {
    this.dialogRef.close();
  }
  saveUser() {
    if (this.reactiveForm.valid && !this.editMode) {
      this.userService.saveUser(this.reactiveForm.value).subscribe((result) => {
        console.log(result);
        this.dialogRef.close();
      });
    } else {
      this.userService
        .editUser(this.currentId, this.reactiveForm.value)
        .subscribe((result) => {
          console.log(result);
          this.dialogRef.close();
        });
    }
  }
  loadEditData(id: string) {
    this.currentId = id;
    this.userService.getUserById(id).subscribe((item) => {
      this.editMode = true;
      this.editData = item;
      
      this.reactiveForm.setValue({
        userName: this.editData.userName,
        email: this.editData.email,
        password: this.editData.password,
      });
      
    });
  }

  ngOnInit(): void {
    if (this.data.id != null && this.data.id != '') {
      this.loadEditData(this.data.id);
    }
  }
}
