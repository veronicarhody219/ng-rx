import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/interface/project';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [{ id: '1', pname: 'test', desc: 'This is a test' }];
  id: string;
  projectForm = this.fomrBuilder.group({
    pname: ['', [Validators.required]],
    desc: ['', [Validators.required, Validators.minLength(10)]],
  });
  constructor(private fomrBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.projectForm.value);
    this.id = (this.projects.length + 1).toString();
    const project = {
      id: this.id,
      pname: this.projectForm.value.pname,
      desc: this.projectForm.value.desc,
    };
    this.projects.push(project);
    this.projectForm.reset();
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(DialogComponent, dialogConfig);
  }
}
