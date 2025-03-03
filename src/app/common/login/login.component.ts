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

  onLogin(): void {
    if (!this.loginForm.valid) return;

    this.httpService.postData(apiUrl.LOGIN, this.loginForm.value).subscribe((response: any) => {

      if (response.status === 200) {
        const { data } = response;
        localStorage.setItem('login', JSON.stringify(data));
        localStorage.setItem('accessToken', JSON.stringify(data.token));
        this.router.navigate(['/home-page']);
      }
    }, (err) => {
      console.error("Login Error:", err);
    }
    );
  }
}
