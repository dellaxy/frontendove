export interface ChartData {
    chartType?: ChartTypes;
    title: string;
    labels: string[];
    data: any[];
    fill?: boolean;
    color?: string | string[];
}

export enum ChartTypes {
    Bar = 'bar',
    Doughnut = 'doughnut',
    Line = 'line',
    Pie = 'pie',
    PolarArea = 'polarArea',
    Radar = 'radar',
    Scatter = 'scatter'
}