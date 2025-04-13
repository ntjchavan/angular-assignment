import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmenttwoComponent } from './assignmenttwo/assignmenttwo.component';
import { VirtualscrollingComponent } from './virtualscrolling/virtualscrolling.component';
import { HighlightcolordemoComponent } from './highlightcolordemo/highlightcolordemo.component';
import { CricketPlayersComponent } from './cricket-players/cricket-players.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    AssignmenttwoComponent, 
    VirtualscrollingComponent, 
    HighlightcolordemoComponent,
    CricketPlayersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assignment';
}
