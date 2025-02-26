import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroupService } from '../form-group.service';

@Component({
  selector: 'app-add-edit-viewusers',
  templateUrl: './add-edit-viewusers.component.html',
  styleUrls: ['./add-edit-viewusers.component.css']
})
export class AddEditViewusersComponent implements OnInit {

  public userForm: FormGroup;
  public isEditing: boolean = false;
  public isViewOnly: boolean = false;
  public userId: number = -1;

  constructor(
    private fb: FormBuilder,
    private userService: FormGroupService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      id: [Date.now()],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if (params['id'] !== undefined) {
        this.userId = +params['id'];

        if (this.route.snapshot.url[0].path === 'view-users') {
          this.isViewOnly = true;
        } else {
          this.isEditing = true;
        }

        const user = this.userService.getUser(this.userId);
        if (user) {
          this.userForm.setValue(user);
        }
      }
    });
  }

  addOrUpdateUser() {
    if (this.userForm.valid) {
      if (this.isEditing) {
        this.userService.updateUser(this.userId, this.userForm.value);
      } else {
        this.userService.addUser(this.userForm.value);
      }
      this.userForm.reset();
      this.router.navigate(['/users']);
    } else {
      this.userForm.markAllAsTouched();
    }
  }


}
