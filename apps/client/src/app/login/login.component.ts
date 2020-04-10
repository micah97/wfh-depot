import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@products/core-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'products-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  authenticatedUser = { email: "admin@wfh.com", password: "12345" };

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.initForm();
  }

  login(input) {
    if (input.email === this.authenticatedUser.email && input.password === this.authenticatedUser.password) {
      this.authService.setToken(true);
      this.router.navigate(['/products']);
    } else {
      this.snackBar.open('Invalid credentials. Try:', ' admin@wfh.com / 12345', { duration: 6000 });
    }
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })
  }
}
