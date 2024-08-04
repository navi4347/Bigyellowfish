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
}
