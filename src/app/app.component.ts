import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



// IMPORTS 
import { HomeComponent } from './home/home.component';
import { Section1Component } from './section-1/section-1.component';
import { Section2Component } from './section-2/section-2.component';
import { Section3Component } from './section-3/section-3.component';
import { Section4Component } from './section-4/section-4.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    
    RouterOutlet,
    HomeComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component

      



  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'digital_dream';
}
