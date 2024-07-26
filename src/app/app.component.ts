import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'hello-world';
  fullName: string | undefined;

  formFields = {
    signUp: {
      name: {
        order: 1,
      },
      email: {
        order: 2,
      },
      password: {
        order: 3,
      },
      confirm_password: {
        order: 4,
      },
    },
  };

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.fullName = await this.authService.getCurrentUserFullName();
      console.log('Full Name:', this.fullName);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }

    let currentUser = await this.authService.getCurrentUser();
    console.log(currentUser);
    let currentUserSession = await this.authService.getCurrentSession();
    console.log(currentUserSession);
    let currentUserSessionAccessToken =
      await this.authService.getCurrentSession();
    console.log(currentUserSessionAccessToken?.idToken?.toString());
  }

  signOut() {
    this.authService.signOut();
    this.fullName = undefined;
  }
}
