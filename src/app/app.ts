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
  personSelectedIndex: number | undefined;
  listPessoas =[
    {name: 'Luiz Gabriel', age: 26},
    {name: 'Pedro', age: 34},
    {name: 'Tiago', age: 55},
    {name: 'João', age: 18},
  ];

  selectPerson(index: number) {
    console.log(index);
    this.personSelectedIndex = index;
  }
}
