import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/app/baseapi/apiURl';
import { ApiHttpsService } from 'src/app/services/api-https.service';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit-view-user',
  templateUrl: './add-edit-view-user.component.html',
  styleUrls: ['./add-edit-view-user.component.css']
})
export class AddEditViewUserComponent implements OnInit {


  public userForm: FormGroup;
  public isEditing: boolean = false;
  public isViewOnly: boolean = false;
  public userId: number = -1;
  public roles: Role[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'user', viewValue: 'User' },
    { value: 'management', viewValue: 'Management' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private httpService: ApiHttpsService
  ) {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      role: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params['id'] !== undefined) {
        this.userId = params['id'];

        if (this.route.snapshot.url[0].path === 'view-user') {
          this.isViewOnly = true;
        } else {
          this.isEditing = true;
        }

        if (this.route.snapshot.url[0].path === 'edit-user') {
          this.userForm.patchValue({
            ...this.userForm.value,
          })
        }

        this.getUserData();
      }
    });
  }

  getUserData = (): void => {
    const getData: any = {
      id: this.userId
    }
    this.httpService.getData(apiUrl.GET_USER_BY_ID, getData).subscribe((response: any) => {
      this.userForm.patchValue({ ...response.data });

    }, (err) => {
      console.error("getUserData Error:", err);
    });
  }

  addOrUpdateUser() {
    if (this.userForm.valid) {

      if (this.isEditing) {
        // Update user API call
        const postData: any = {
          id: this.userId,
          ...this.userForm.value
        };
        this.httpService.putData(apiUrl.UPDATE_USER_BY_ID, postData)
          .subscribe((response: any) => {
            if (response.status === 200 || response.status === 204) {
              this.router.navigate(['/user']);
            }
          }, (err) => {
            console.error("Update Error:", err);
          });
      } else {
        // Add new user API call
        const postData = this.userForm.value
        this.httpService.postData(apiUrl.ADD_USER, postData)
          .subscribe((response: any) => {
            if (response.status === 200) {
              this.router.navigate(['/user']);
            }
          }, (err) => {
            console.error("Add Error:", err);
          });
      }
    } else {
      this.userForm.markAllAsTouched();
    }
  }

}
