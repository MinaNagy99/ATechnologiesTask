import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateDealComponent } from './create-deal/create-deal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateDealComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AtechnologiesTask';
}
