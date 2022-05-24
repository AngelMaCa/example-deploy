import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-deploy';
  loading$ = this.loader.loading$;

  constructor(
    public loader: LoadingService
  ){
    let variable = environment.FIREBASE_API_KEY;
    alert(variable);
  }

}
