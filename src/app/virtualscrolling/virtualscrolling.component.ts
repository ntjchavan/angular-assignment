import { Component, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtualscrolling',
  imports: [ ScrollingModule ],
  templateUrl: './virtualscrolling.component.html',
  styleUrl: './virtualscrolling.component.css'
})
export class VirtualscrollingComponent implements OnInit {
  aiNumbers: number[] = Array.from({ length: 10000 }, (_, i) => i + 1);

  constructor() {
    
  }

  ngOnInit() {
    console.log('Virtual scrolling: ', this.aiNumbers);
  }
}
