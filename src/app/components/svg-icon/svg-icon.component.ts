import { Component, Input, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent {
  @Input() iconClass: string = ''
  @Input() width: number = 20

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.iconClass) {
      this.loadSvgIcon(this.iconClass);
    }
  }

  private loadSvgIcon(iconClass: string): void {
    const svgPath = `assets/svg/${iconClass}.svg`;

    fetch(svgPath)
      .then(response => response.text())
      .then(svgContent => {
        const parser = new DOMParser();
        const svgDocument = parser.parseFromString(svgContent, 'image/svg+xml');
        const svgElement = svgDocument.querySelector('svg');
        svgElement?.setAttribute('width', `${this.width}px`);
        // Append the modified SVG to the component's element
        this.renderer.appendChild(this.el.nativeElement, svgElement);
      })
      .catch(error => {
        console.error(`Failed to load SVG: ${error}`);
      });
  }
}
