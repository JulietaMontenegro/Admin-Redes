import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    InicioComponent,
    FormsModule,
    HttpClientModule,

  ]
})
export class AppComponent {
  title = 'app';
  constructor(private http : HttpClient) {}

}