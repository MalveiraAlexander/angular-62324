import { LoginResponse } from './../../models/login.response';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/modules/shared/services/storage.service';
import { IpService } from '../../services/ip.service';
import { UserRequest } from 'src/app/modules/main/models/user.request';
import { LoginRequest } from '../../models/login.request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [IpService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private ip: string;
  constructor(private ipService: IpService,
              private storage: StorageService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.getIp();
  }

  getIp() {
    this.ipService.getIp().subscribe({
      next: (data) => {
        this.ip = data['ip'];
      }
    });
  }

  login() {
    console.log(this.loginForm.value);

    const login: LoginRequest = {
      username: this.loginForm.value.username,
      password: btoa(this.loginForm.value.password),
      deviceName: `WebBrowser-${window.navigator.platform}-${this.storage.getBrowserInfo()}`,
      cookie: this.storage.getCookie(),
      isApp: false,
      publicIP: this.ip,
    }

    console.log(login);
    this.auth.login(login).subscribe({
      next: (data: LoginResponse) => {
        this.storage.setToken(data.token);
        this.storage.setRefreshToken(data.refreshToken);
      }, error: (err) => {
        console.log(err);
      }, complete: () => {
        console.log('Terminado');
        this.router.navigate(['/main']);
      }
    });
  }

  private createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
}
