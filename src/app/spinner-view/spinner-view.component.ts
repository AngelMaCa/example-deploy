import { Component, OnInit, Inject } from '@angular/core';  
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-spinner-view',
  templateUrl: './spinner-view.component.html',
  styleUrls: ['./spinner-view.component.css']
})
export class SpinnerViewComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
  }

}
