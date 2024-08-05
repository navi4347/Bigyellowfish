import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  regionSalesChartOptions: Highcharts.Options = {};

  private data = [
   { "Region": "South", "Sales": 261.96, "Segment": "Consumer" },
    { "Region": "South", "Sales": 731.94, "Segment": "Consumer" },
    { "Region": "West", "Sales": 14.62, "Segment": "Corporate" },
    { "Region": "South", "Sales": 957.5775, "Segment": "Consumer" },
    { "Region": "South", "Sales": 22.368, "Segment": "Consumer" },
    { "Region": "West", "Sales": 48.86, "Segment": "Consumer" },
    { "Region": "West", "Sales": 7.28, "Segment": "Consumer" },
    { "Region": "West", "Sales": 907.152, "Segment": "Consumer" },
    { "Region": "West", "Sales": 18.504, "Segment": "Consumer" },
    { "Region": "West", "Sales": 114.9, "Segment": "Consumer" },
    { "Region": "West", "Sales": 1706.184, "Segment": "Consumer" },
    { "Region": "West", "Sales": 911.424, "Segment": "Consumer" },
    { "Region": "South", "Sales": 15.552, "Segment": "Consumer" },
    { "Region": "West", "Sales": 407.976, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 68.81, "Segment": "Home Office" },
    { "Region": "Central", "Sales": 2.544, "Segment": "Home Office" },
    { "Region": "Central", "Sales": 665.88, "Segment": "Consumer" },
    { "Region": "West", "Sales": 55.5, "Segment": "Consumer" },
    { "Region": "West", "Sales": 8.56, "Segment": "Consumer" },
    { "Region": "West", "Sales": 213.48, "Segment": "Consumer" },
    { "Region": "West", "Sales": 22.72, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 19.46, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 60.34, "Segment": "Corporate" },
    { "Region": "East", "Sales": 71.372, "Segment": "Consumer" },
    { "Region": "West", "Sales": 1044.63, "Segment": "Consumer" },
    { "Region": "West", "Sales": 11.648, "Segment": "Consumer" },
    { "Region": "West", "Sales": 90.57, "Segment": "Consumer" },
    { "Region": "East", "Sales": 3083.43, "Segment": "Consumer" },
    { "Region": "East", "Sales": 9.618, "Segment": "Consumer" },
    { "Region": "East", "Sales": 124.2, "Segment": "Consumer" },
    { "Region": "East", "Sales": 3.264, "Segment": "Consumer" },
    { "Region": "East", "Sales": 86.304, "Segment": "Consumer" },
    { "Region": "East", "Sales": 6.858, "Segment": "Consumer" },
    { "Region": "East", "Sales": 15.76, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 29.472, "Segment": "Home Office" },
    { "Region": "Central", "Sales": 1097.544, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 190.92, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 113.328, "Segment": "Home Office" },
    { "Region": "Central", "Sales": 532.3992, "Segment": "Home Office" },
    { "Region": "Central", "Sales": 212.058, "Segment": "Home Office" },
    { "Region": "Central", "Sales": 371.168, "Segment": "Home Office" },
    { "Region": "Central", "Sales": 147.168, "Segment": "Corporate" },
    { "Region": "West", "Sales": 77.88, "Segment": "Corporate" },
    { "Region": "South", "Sales": 95.616, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 45.98, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 17.46, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 211.96, "Segment": "Consumer" },
    { "Region": "East", "Sales": 45, "Segment": "Consumer" },
    { "Region": "East", "Sales": 21.8, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 38.22, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 75.18, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 6.16, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 89.99, "Segment": "Consumer" },
    { "Region": "East", "Sales": 15.26, "Segment": "Corporate" },
    { "Region": "East", "Sales": 1029.95, "Segment": "Corporate" },
    { "Region": "East", "Sales": 208.56, "Segment": "Consumer" },
    { "Region": "East", "Sales": 32.4, "Segment": "Consumer" },
    { "Region": "East", "Sales": 319.41, "Segment": "Consumer" },
    { "Region": "East", "Sales": 14.56, "Segment": "Consumer" },
    { "Region": "East", "Sales": 30, "Segment": "Consumer" },
    { "Region": "East", "Sales": 48.48, "Segment": "Consumer" },
    { "Region": "East", "Sales": 1.68, "Segment": "Consumer" },
    { "Region": "West", "Sales": 13.98, "Segment": "Consumer" },
    { "Region": "West", "Sales": 25.824, "Segment": "Consumer" },
    { "Region": "West", "Sales": 146.73, "Segment": "Consumer" },
    { "Region": "West", "Sales": 79.76, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 213.115, "Segment": "Home Office" },
    { "Region": "West", "Sales": 1113.024, "Segment": "Corporate" },
    { "Region": "West", "Sales": 167.968, "Segment": "Corporate" },
    { "Region": "South", "Sales": 75.88, "Segment": "Consumer" },
    { "Region": "East", "Sales": 4.616, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 19.05, "Segment": "Consumer" },
    { "Region": "South", "Sales": 831.936, "Segment": "Consumer" },
    { "Region": "South", "Sales": 97.04, "Segment": "Consumer" },
    { "Region": "South", "Sales": 72.784, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 1.248, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 9.708, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 27.24, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 19.3, "Segment": "Consumer" },
    { "Region": "South", "Sales": 208.16, "Segment": "Corporate" },
    { "Region": "South", "Sales": 16.74, "Segment": "Corporate" },
    { "Region": "West", "Sales": 14.9, "Segment": "Consumer" },
    { "Region": "West", "Sales": 21.39, "Segment": "Consumer" },
    { "Region": "South", "Sales": 200.984, "Segment": "Corporate" },
    { "Region": "Central", "Sales": 230.376, "Segment": "Home Office" },
    { "Region": "South", "Sales": 301.96, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 19.99, "Segment": "Consumer" },
    { "Region": "Central", "Sales": 6.16, "Segment": "Consumer" },
    { "Region": "West", "Sales": 489.72, "Segment": "Corporate" }
  ];

  ngOnInit(): void {
    const formattedData = this.processData(this.data);
    this.regionSalesChartOptions = this.getChartOptions(formattedData);
  }

  processData(data: any[]): any {
    const salesByRegion: { [region: string]: { [segment: string]: number } } = {};

    data.forEach((row: any) => {
      const region = row.Region;
      const segment = row.Segment;
      const sales = parseFloat(row.Sales);

      if (!region || !segment || isNaN(sales)) {
        return;
      }

      if (!salesByRegion[region]) {
        salesByRegion[region] = {};
      }
      if (!salesByRegion[region][segment]) {
        salesByRegion[region][segment] = 0;
      }
      salesByRegion[region][segment] += sales;
    });

    return salesByRegion;
  }

  getChartOptions(data: any): Highcharts.Options {
    const categories = Object.keys(data);
    const segments = new Set<string>();

    categories.forEach(region => {
      Object.keys(data[region]).forEach(segment => segments.add(segment));
    });

    const series: Highcharts.SeriesOptionsType[] = Array.from(segments).map(segment => {
      return {
        type: 'bar',
        name: segment,
        data: categories.map(region => data[region][segment] || 0)
      };
    });

    return {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Sales by Region and Segment'
      },
      xAxis: {
        categories: categories,
        title: {
          text: 'Region'
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Sales'
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: 'bold',
            color: (Highcharts.defaultOptions.title?.style?.color) || 'gray'
          }
        }
      },
      legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor: Highcharts.defaultOptions.legend?.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
        bar: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: series
    };
  }
}
