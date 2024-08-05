import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SeriesOptionsType } from 'highcharts';

@Component({
  selector: 'app-loss',
  templateUrl: './loss.component.html',
  styleUrls: ['./loss.component.css']
})
export class LossComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Top 10 Loss-Making Cities'
    },
    xAxis: {
      categories: [
        'Philadelphia',
        'San Antonio',
        'Medina',
        'Houston',
        'San Antonio',
        'Bloomington',
        'Dublin',
        'Fort Lauderdale',
        'Chicago',
        'Houston'
      ],
      title: {
        text: 'City'
      }
    },
    yAxis: {
      title: {
        text: 'Loss'
      },
      labels: {
        formatter: function() {
          return (-this.value).toString(); 
        }
      }
    },
    series: [{
      type: 'bar',
      name: 'Loss',
      data: [
        -1665.0522,
        -1359.992,
        -950.4,
        -509.997,
        -453.849,
        -407.682,
        -383.9904,
        -383.031,
        -356.728,
        -251.9958
      ],
      color: '#FF0000'
    }] as SeriesOptionsType[],
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        },
         color: '#FF0000'
      }
    }
  };
}
