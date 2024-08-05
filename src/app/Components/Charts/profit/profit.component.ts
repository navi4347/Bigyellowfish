import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SeriesOptionsType } from 'highcharts';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Top 10 Most Profitable Cities'
    },
    xAxis: {
      categories: [
        'San Diego',
        'Franklin',
        'Lakeville',
        'Lakeville',
        'Houston',
        'New York City',
        'Orem',
        'Edmond',
        'Henderson',
        'Independence'
      ],
      title: {
        text: 'City'
      }
    },
    yAxis: {
      title: {
        text: 'Profit'
      }
    },
    series: [{
      type: 'bar',
      name: 'Profit',
      data: [
        636.0003,
        585.552,
        580.5394,
        496.0725,
        376.11,
        298.6855,
        240.2649,
        236.2325,
        219.582,
        218.2518
      ]
    }]as SeriesOptionsType[],
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    }
  };
}
