import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Papa from 'papaparse';
import { AuthService } from '../../../Services/Auth/auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: any[] = [];
  headers: string[] = [];

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const token = this.authService.getAuthToken(); 
    if (!token) {
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get('https://interview.bigyellowfish.io/api/Content/GetCSVData', { headers, responseType: 'text' })
      .subscribe((response: any) => {
        const parsedData = Papa.parse(response, {
          header: true,
          skipEmptyLines: true,
        });
        this.data = parsedData.data;
        if (this.data.length > 0) {
          this.headers = Object.keys(this.data[0]);
        }
      }, (error) => {
        console.error('Error fetching data', error);
      });
  }

  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

}
