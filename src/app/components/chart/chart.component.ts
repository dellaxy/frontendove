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
            backgroundColor: ['#0083FF'],
          },
        ],
      },
    });
  }
}
