import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Two-Way-Data-Binding');
  name: string = 'Gabriel';

  handleInputChange(event: string) {
    console.log(event);

    this.name = event.toLocaleUpperCase();

  }

}
