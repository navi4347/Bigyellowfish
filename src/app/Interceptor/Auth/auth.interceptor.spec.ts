import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

describe('AuthInterceptor', () => {
  let interceptor: AuthInterceptor;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        }
      ]
    });

    interceptor = TestBed.inject(AuthInterceptor);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header if token is present', () => {
    localStorage.setItem('token', 'test-token');

    httpClient.get('/test-endpoint').subscribe(response => {
    });

    const req = httpTestingController.expectOne('/test-endpoint');
    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toEqual('Bearer test-token');
    req.flush({});
  });

  afterEach(() => {
    httpTestingController.verify();
    localStorage.removeItem('token');
  });
});
