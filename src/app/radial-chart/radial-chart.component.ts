import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';
import * as d3Selection from 'd3-selection';

@Component({
  selector: 'app-radial-chart',
  templateUrl: './radial-chart.component.html',
  styleUrls: ['./radial-chart.component.scss']
})
export class RadialChartComponent implements OnInit, OnChanges {
  @ViewChild('radialChart') public radialChart: ElementRef;
  private svg: any;
  @Input() skillName: string = ''
  @Input() percentage: number = 0;

  constructor() { }

  ngOnInit() {
    if (!d3Selection.select(this.radialChart.nativeElement).selectAll('svg').empty()) {
      d3Selection.select(this.radialChart.nativeElement).selectAll('svg').remove();
      d3Selection.select(this.radialChart.nativeElement).selectAll('img').remove();
    }
    this.renderSVG();
    this.renderRadialArcs();
    this.renderRadialText();
  }

  ngOnChanges() {
    if (!d3Selection.select(this.radialChart.nativeElement).selectAll('svg').empty()) {
      d3Selection.select(this.radialChart.nativeElement).selectAll('svg').remove();
      d3Selection.select(this.radialChart.nativeElement).selectAll('img').remove();
    }
    this.renderSVG();
    this.renderRadialArcs();
    this.renderRadialText();
  }

  public renderSVG() {
    const element = this.radialChart.nativeElement;
    this.svg = d3.select(element).append('svg')
      .attr('width', 100)
      .attr('height', 100)
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0' + ' ' + 100 + ' ' + 100);
  }

  public renderRadialArcs() {
    const typeHoursArc = this.percentage;
    const typeSizeHoursCircle = d3.arc()
      .innerRadius(40)
      .outerRadius(50)
      .startAngle(0).endAngle(this.getCircumference(typeHoursArc));
    const totalHours = d3.arc()
      .innerRadius(40)
      .outerRadius(50)
      .startAngle(0).endAngle(this.getCircumference(1));
      this.appendPathOnSVG(totalHours, 'translate(50,50)', '#212529');
      this.appendPathOnSVG(typeSizeHoursCircle, 'translate(50,50)', '#F0203F', 'typseSizeHoursRadial');
      
    
  }

  public renderRadialText() {
    this.appendTextOnSVG(50, 50, '#F0203F', '15', this.skillName);

  
  }

  public appendTextOnSVG(x: number, y: number, color: string, fontSize: string, text: string) {
    this.svg.append('text').attr('x', x)
      .attr('y', y).text(text).attr('font-size', fontSize).attr('color', color).attr('text-anchor', 'middle').attr('fill', 'white');;
  }

  public appendPathOnSVG(datum: any, transform: string, fill: string, id?: string) {
    this.svg.append('path')
      .attr('d', datum).attr('transform', transform).attr('fill', fill).attr('id', id ? id : null);
  }

  public getCircumference(radius: number) {
    return 2 * Math.PI * radius;
  }

}
