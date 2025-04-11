import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmenttwoComponent } from './assignmenttwo/assignmenttwo.component';
import { VirtualscrollingComponent } from './virtualscrolling/virtualscrolling.component';
import { HighlightcolordemoComponent } from './highlightcolordemo/highlightcolordemo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AssignmenttwoComponent, VirtualscrollingComponent, HighlightcolordemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assignment';
}
