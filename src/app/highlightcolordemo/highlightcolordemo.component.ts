import { FormsModule } from '@angular/forms';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HighlightDirective } from '../Directives/highlight.directive';

@Component({
  selector: 'app-highlightcolordemo',
  imports: [FormsModule, HighlightDirective],
  templateUrl: './highlightcolordemo.component.html',
  styleUrl: './highlightcolordemo.component.css'
})
export class HighlightcolordemoComponent implements OnInit, DoCheck {
  userColor: string = 'lightblue';

  ngOnInit(): void {
     
  }

  ngDoCheck(): void {
    console.log(this.userColor);   
  }

}
