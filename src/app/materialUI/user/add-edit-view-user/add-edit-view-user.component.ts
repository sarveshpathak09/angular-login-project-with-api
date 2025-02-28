import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      id: [Date.now()],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      role: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params['id'] !== undefined) {
        this.userId = +params['id'];

        if (this.route.snapshot.url[0].path === 'view-user') {
          this.isViewOnly = true;
        } else {
          this.isEditing = true;
        }

      }
    });
  }

  addOrUpdateUser() {
    if (this.userForm.valid) {

    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
