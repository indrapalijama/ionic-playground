import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validationMessage = {
    email: [],
    password: []
  };
  passwordType = 'password';
  passwordIcon = 'eye-off';

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });

    this.validationMessage = {
      email: [
        { type: 'required', message: 'Email is required.' },
        { type: 'email', message: 'Please enter a valid email.' }
      ],
      password: [
        { type: 'required', message: 'Password is required.' },
      ],
    };
  }


  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  login(value) {
    if (this.loginForm.valid) {
      this.authService.login(value.email, value.password).then(
        () => {
          this.navCtrl.navigateRoot('/dashboard');
        },
        error => {
          console.log(error);
        },
      );
    }
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
