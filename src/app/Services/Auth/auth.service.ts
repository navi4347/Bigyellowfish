import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://interview.bigyellowfish.io/api/User/authenticate';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(this.apiUrl, { username, password }).pipe(
      map(response => {
        if (response && response.token) {
          console.log('Token received:', response.token);
          this.storeAuthToken(response.token);
          return true;
        }
        console.log('Token not received in response:', response);
        return false;
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError('Login failed; please try again later.');
      })
    );
  }

  logout(): void {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('authToken');
    }
  }

  isLoggedIn(): boolean {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      return !!sessionStorage.getItem('authToken');
    }
    return false;
  }

  getAuthToken(): string | null {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem('authToken');
    }
    return null;
  }

  private storeAuthToken(token: string): void {
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem('authToken', token);
      console.log('Token stored in sessionStorage:', token);
    }
  }
}
