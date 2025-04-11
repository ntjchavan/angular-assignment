import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReversestringPipe } from '../Pipes/reversestring.pipe';
import { resolve } from 'path';

@Component({
  selector: 'app-assignmenttwo',
  imports: [NgForOf, ReversestringPipe, CommonModule],
  templateUrl: './assignmenttwo.component.html',
  styleUrl: './assignmenttwo.component.css'
})
export class AssignmenttwoComponent implements OnInit {

  reverseString: string = "This is reverse string";
  dataPromise!: Promise<string>;

  objArray: any[] = [
    { TrainingRequestNo: 101, TrainingName: 'Azure Training', TrainingMode: 'Online', Duration: '3 months' },
    { TrainingRequestNo: 102, TrainingName: 'Dot Net Core Training', TrainingMode: 'Online', Duration: '45 days' },
    { TrainingRequestNo: 103, TrainingName: 'Java Training', TrainingMode: 'Offline', Duration: '2 months' },
    { TrainingRequestNo: 104, TrainingName: 'Angular Training', TrainingMode: 'Online', Duration: '2 months' },
  ]
  constructor() {
  }

  ngOnInit(): void {
    this.objArray.sort( (a,b) => a.TrainingName.localeCompare(b.TrainingName));

    this.dataPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data loaded after 2 seconds');
      }, 2000);
    })
  }
}
