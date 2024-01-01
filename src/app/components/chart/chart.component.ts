import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartData } from '../../models/chartData.model';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {

  @Input() chartData: ChartData[];
  @ViewChild('canvas') canvasRef: ElementRef;

  chart: any;
  baseColor = '#0083FF';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    // využívam canvas, a počas server-side rendrovania sa nemôže vytvoriť, tak sa týmto zabezpečí client-side renderovanie
    if (!isPlatformServer(this.platformId)) {
      this.createChart();
    }
  }

  private createChart() {
    if (this.chartData && this.chartData.length > 0) {
      const firstDataset = this.chartData[0];

      const datasets = this.chartData.map((dataset, index) => {
        let colors: string | string[] = dataset.color || this.baseColor;
        colors = Array.isArray(colors) ? colors : [colors];

        return {
          label: dataset.title,
          data: dataset.data,
          backgroundColor: dataset.fill ? colors.map(color => this.hexToRgba(color, 0.2)) : colors.map(color => this.hexToRgba(color, 1)),
          borderColor: colors.map(color => this.hexToRgba(color, 1)),
          pointBorderColor: colors.map(color => this.hexToRgba(color, 1)),
          pointBackgroundColor: colors.map(color => this.hexToRgba(color, 1)),
          fill: dataset.fill ? dataset.fill : false,
        };
      });

      this.chart = new Chart(this.canvasRef.nativeElement, {
        type: firstDataset.chartType ? firstDataset.chartType : 'bar',
        data: {
          labels: firstDataset.labels,
          datasets: datasets,
        },
      });
    }
  }

  hexToRgba(hex: string, alpha: number): string {
    const hexValue = hex.replace('#', '');
    const r = parseInt(hexValue.substring(0, 2), 16);
    const g = parseInt(hexValue.substring(2, 4), 16);
    const b = parseInt(hexValue.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
}
