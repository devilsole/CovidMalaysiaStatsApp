import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidService } from  'src/app/services/covid.service';

@Component({  
	selector: 'app-covid',  
	templateUrl: './covid.component.html',  
	styleUrls: ['./covid.component.css']  
}) 

export class CovidComponent implements OnInit {
	public data$: Observable<Date[]>;
  
	constructor(
	  private api: CovidService 
	){ }
  
   ngOnInit() {
	  this.data$ = this.api.getAll();
	}
  }
  
 

