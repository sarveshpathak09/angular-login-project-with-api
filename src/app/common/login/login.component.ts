import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiHttpsService } from 'src/app/services/api-https.service';
import { apiUrl } from 'src/app/baseapi/apiURl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: ApiHttpsService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  onLogin() {
    if (this.loginForm.valid) {
      const postData: any = {
        ...this.loginForm.value

      };

      this.httpService.postData(apiUrl.LOGIN, postData).subscribe((response: any) => {
        console.log("🚀 ~ LoginComponent ~ this.httpService.postData ~ response:", response)
        if (response.status === 200) {
          localStorage.setItem('login', JSON.stringify(response.data));
          localStorage.setItem('accessToken', JSON.stringify(response.data.token));
          this.router.navigate(['/home-page']);

        }
      });
    }

  }


}