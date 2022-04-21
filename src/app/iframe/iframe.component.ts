import { Component, ElementRef, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit {
  urlPBI: string = '';

  constructor(private hostElement: ElementRef) { }

  ngOnInit(): void {
    const iframe = this.hostElement.nativeElement.querySelector('iframe');
    iframe.src = environment.urlPBI;
  }

}
