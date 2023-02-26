import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'learn-ngrx';
  lang;
  constructor(
    public authService: AuthService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'vi']);
    translate.setDefaultLang('en');
    // translate.use(localStorage.getItem("lang") || "en")
  }

  ngOnInit(): void {}
  changeLang(lang) {
    this.translate.use(lang);
  }
}
