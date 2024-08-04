import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Papa from 'papaparse';
import { AuthService } from '../../../Services/Auth/auth.service';

interface DataRow {
  [key: string]: any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: DataRow[] = [];
  headers: string[] = [];
  columnsToDisplay: string[] = [
    'Row ID', 'Order ID', 'Order Date', 'Ship Date', 'Ship Mode', 
    'Customer ID', 'Customer Name', 'Product Name', 
    'Sales', 'Quantity', 'Discount', 'Profit'
  ];

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
        this.data = parsedData.data as DataRow[];
        
        if (this.data.length > 0) {
          this.headers = this.columnsToDisplay;
          this.data = this.data.map(row => 
            this.columnsToDisplay.reduce((acc, key) => {
              if (row[key] !== undefined) {
                acc[key] = row[key];
              }
              return acc;
            }, {} as DataRow)
          );
        }
      }, (error) => {
        console.error('Error fetching data', error);
      });
  }

  getKeys(obj: DataRow): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
