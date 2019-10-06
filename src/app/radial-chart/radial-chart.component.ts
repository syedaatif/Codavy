import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';
import * as d3Selection from 'd3-selection';

@Component({
  selector: 'app-radial-chart',
  templateUrl: './radial-chart.component.html',
  styleUrls: ['./radial-chart.component.scss']
})
export class RadialChartComponent implements OnInit {
  @ViewChild('radialChart',{static: true}) public radialChart: ElementRef;
  private svg: any;
  @Input() skillName: string = ''
  @Input() percentage: number = 0;
  public chartWidth: number = 0;
  public chartHeight: number = 0;
  public fontSize: string = '';

  constructor() { }

  ngOnInit() {
    if (!d3Selection.select(this.radialChart.nativeElement).selectAll('svg').empty()) {
      d3Selection.select(this.radialChart.nativeElement).selectAll('svg').remove();
      d3Selection.select(this.radialChart.nativeElement).selectAll('img').remove();
    }
    this.chartWidth = this.radialChart.nativeElement.offsetWidth;
    this.chartHeight = this.radialChart.nativeElement.offsetHeight;
    console.log(this.chartHeight, this.chartWidth);
    if( this.chartWidth > 0) {
      this.renderSVG();
      this.renderRadialArcs();
      this.renderRadialText();
    }
    
  }

  

  public renderSVG() {
    
      this.svg = d3.select(this.radialChart.nativeElement).append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0' + ' ' + this.chartWidth + ' ' + this.chartWidth);
    
   
  }

  public renderRadialArcs() {
    this.fontSize = '' + (this.chartWidth / 6.66).toFixed(0) + 'px';
    const halfWidth = this.chartWidth / 2;
    const translate = 'translate(' + halfWidth +',' + halfWidth + ')';
    const percentage = this.percentage;
    const percentageCircle = d3.arc()
      .innerRadius(this.chartWidth/ 2.25)
      .outerRadius(this.chartWidth/2)
      .startAngle(0).endAngle(this.getCircumference(percentage));
    const fullCircle = d3.arc()
      .innerRadius(this.chartWidth / 2.25)
      .outerRadius(this.chartWidth/2)
      .startAngle(0).endAngle(this.getCircumference(1));
      this.appendPathOnSVG(fullCircle, translate, '#212529');
      const innerArc = d3.arc()
      .innerRadius(0)
      .outerRadius(this.chartWidth / 2.647)
      .startAngle(0).endAngle(this.getCircumference(1));
     
      this.appendPathOnSVG(innerArc, translate, '#E7B329');
      this.appendPathOnSVG(fullCircle, translate, '#212529');
      this.appendPathOnSVG(percentageCircle, translate, '#E7B329', 'percentageCircle');
      
    
  }

  public renderRadialText() {
    this.appendTextOnSVG(this.chartWidth / 2, this.chartWidth / 2, '#2B3137', this.fontSize, this.skillName);
    this.appendTextOnSVG(this.chartWidth / 2, this.chartWidth / 1.2857, '#2B3137', this.fontSize, ''+(this.percentage)* 100 + '%');

  
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
