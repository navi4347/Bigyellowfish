import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SeriesOptionsType } from 'highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptionsQuantity: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Quantity Split by Ship Mode'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y:.1f}%'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Quantity',
      data: [
        ['First Class', 178],
        ['Second Class', 137],
        ['Standard Class', 622]
      ]
    }] as SeriesOptionsType[]
  };

  chartOptionsSales: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Month-wise Trends for Sales'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y:.1f}%'
        }
      }
    },
    series: [{
      type: 'pie',
      name: 'Sales',
      data: [
        ['January', 150000],
        ['February', 120000],
        ['March', 180000],
        ['April', 160000],
        ['May', 200000],
        ['June', 170000],
        ['July', 210000],
        ['August', 190000],
        ['September', 180000],
        ['October', 160000],
        ['November', 170000],
        ['December', 200000]
      ]
    }] as SeriesOptionsType[]
  };
}
