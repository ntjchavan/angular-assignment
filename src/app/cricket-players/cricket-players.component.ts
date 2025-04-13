import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cricket-players',
  imports: [ 
    CommonModule,
    DragDropModule
  ],
  templateUrl: './cricket-players.component.html',
  styleUrl: './cricket-players.component.css'
})
export class CricketPlayersComponent {
  players: string[] = [
    'Virat Kohli', 'Rohit Sharma', 'Jasprit Bumrah', 'KL Rahul', 'Shubman Gill',
    'Hardik Pandya', 'Ravindra Jadeja', 'Rishabh Pant', 'Suryakumar Yadav',
    'Shreyas Iyer', 'Mohammed Shami', 'Axar Patel', 'Kuldeep Yadav', 'Ishan Kishan',
    'Yuzvendra Chahal'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);
  }
  
}
