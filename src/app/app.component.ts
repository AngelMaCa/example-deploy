import { Component } from '@angular/core';
import { SpinnerServiceService } from './spinner-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-deploy';
  constructor(private spinner: SpinnerServiceService){
    // this.spinner.start();
  }
}
