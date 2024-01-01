import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartData } from '../../models/chartData.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {

  @Input() chartData: ChartData;

  chart: any;

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: this.chartData.chartType ? this.chartData.chartType : 'bar',
      data: {
        labels: this.chartData.labels,
        datasets: [
          {
            label: this.chartData.title,
            data: this.chartData.data,
            backgroundColor: this.chartData.fill ? 'rgba(0, 131, 255, .2)' : 'rgba(0, 131, 255, 1)',
            borderColor: ['#0083FF'],
            pointBorderColor: ['#0083FF'],
            pointBackgroundColor: ['#0083FF'],
            fill: this.chartData.fill ? this.chartData.fill : false,
          },
        ],
      },
    });
  }
}
