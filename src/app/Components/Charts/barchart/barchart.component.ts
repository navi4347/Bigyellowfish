import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  regionSalesChartOptions: Highcharts.Options;
  topProfitableCitiesChartOptions: Highcharts.Options;
  topLossMakingCitiesChartOptions: Highcharts.Options;

  constructor(private http: HttpClient) {
    this.regionSalesChartOptions = {};
    this.topProfitableCitiesChartOptions = {};
    this.topLossMakingCitiesChartOptions = {};
  }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJpZCI6IjEwIiwibmJmIjoxNzIyNzYxNjIwLCJleHAiOjE3MjI3OTA0MjAsImlhdCI6MTcyMjc2MTYyMH0.Awj0BDeL3z1VLk__1qXEzp8F1CmzYwq0tcl5VT5xpsI'
    });

    this.http.get('https://interview.bigyellowfish.io/api/Content/GetCSVData', { headers })
      .subscribe((data: any) => {
        this.createRegionSalesChart(data);
        this.createTopProfitableCitiesChart(data);
        this.createTopLossMakingCitiesChart(data);
      });
  }

  createRegionSalesChart(data: any): void {
    const regionSales = this.processRegionSalesData(data);

    this.regionSalesChartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Region wise Sales'
      },
      xAxis: {
        categories: regionSales.regions
      },
      yAxis: {
        title: {
          text: 'Sales'
        }
      },
      series: regionSales.series.map((seriesData: any) => ({
        type: 'column',
        name: seriesData.name,
        data: seriesData.data
      }))
    };
  }

  createTopProfitableCitiesChart(data: any): void {
    const topProfitableCities = this.processTopProfitableCitiesData(data);

    this.topProfitableCitiesChartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Top 10 Most Profitable Cities'
      },
      xAxis: {
        categories: topProfitableCities.cities
      },
      yAxis: {
        title: {
          text: 'Profit'
        }
      },
      series: [{
        type: 'bar',
        name: 'Profit',
        data: topProfitableCities.profits
      }]
    };
  }

  createTopLossMakingCitiesChart(data: any): void {
    const topLossMakingCities = this.processTopLossMakingCitiesData(data);

    this.topLossMakingCitiesChartOptions = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Top 10 Loss Making Cities'
      },
      xAxis: {
        categories: topLossMakingCities.cities
      },
      yAxis: {
        title: {
          text: 'Profit'
        }
      },
      series: [{
        type: 'bar',
        name: 'Profit',
        data: topLossMakingCities.profits
      }]
    };
  }

  processRegionSalesData(data: any): any {
    // Implement logic to process data for Region wise Sales
  }

  processTopProfitableCitiesData(data: any): any {
    // Implement logic to process data for Top 10 Most Profitable Cities
  }

  processTopLossMakingCitiesData(data: any): any {
    // Implement logic to process data for Top 10 Loss Making Cities
  }
}
