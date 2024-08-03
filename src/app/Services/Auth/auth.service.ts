import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://interview.bigyellowfish.io/api/User/authenticate';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>(this.apiUrl, { username, password }).pipe(
      catchError(error => {
        console.error('Login error:', error);
        return throwError('Login failed; please try again later.');
      })
    );
  }
  logout() {
    sessionStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('authToken');
  }

  getAuthToken(): string | null {
    return sessionStorage.getItem('authToken');
  }
}
