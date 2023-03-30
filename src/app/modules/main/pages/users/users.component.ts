import { StorageService } from './../../../shared/services/storage.service';
import { UserService } from './../../services/user.service';
import { UserResponse } from './../../models/user.response';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserRequest } from '../../models/user.request';
import { RefreshService } from '../../services/refresh.service';
import { LoginResponse } from 'src/app/modules/auth/models/login.response';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  form: FormGroup;
  users: UserResponse[] = [];
  loading: boolean = false;
  isEditing: boolean = false;
  selectId: number = 0;

  constructor(private user: UserService,
              private refresh: RefreshService,
              private storage: StorageService) { }

  ngOnInit(): void {
    this.createForm();
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.user.getUsers().subscribe({
      next: (data: UserResponse[]) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
        if (err.status === 401) {
          this.refresh.refreshToken().subscribe({
            next: (data: LoginResponse) => {
              this.storage.setToken(data.token);
              this.storage.setRefreshToken(data.refreshToken);
            },
            error: (err) => {
              console.log(err);

            },
            complete: () => {
              this.getUsers();
            }
          });
        }
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  save() {
    const userRequest: UserRequest = {
      name: this.form.value.name,
      email: this.form.value.email,
      lastname: this.form.value.lastname
    };
    if (this.isEditing) {
      this.user.updateUser(this.selectId, userRequest).subscribe({
        next: (data: UserResponse) => {},
        error: (err) => {
          console.log(err);
        }, complete: () => {
          this.getUsers();
        }
      });
    } else {
      this.user.createUser(userRequest).subscribe({
        next: (data: UserResponse) => {},
        error: (err) => {
          console.log(err);
        }, complete: () => {
          this.getUsers();
        }
      });
    }
    this.form.reset();
    this.isEditing = false;
  }

  edit(id: number) {
    this.user.getUser(id).subscribe({
      next: (data: UserResponse) => {
        this.form.patchValue(data);
      },
      error: (err) => {
        console.log(err);
      }, complete: () => {
        this.selectId = id;
        this.isEditing = true;
      }
    });
  }

  delete(id: number) {
    this.user.deleteUser(id).subscribe({
      next: (data: UserResponse) => {},
      error: (err) => {
        console.log(err);
      }, complete: () => {
        this.getUsers();
      }
    });
  }

  private createForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
}
