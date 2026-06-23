import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StatusClassPipe } from './pipes/status-class.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, StatusClassPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Two-Way-Data-Binding');
  pessoa = {
    name: 'Caminho',
    status:1
  };
  pessoa2 = {
    name: 'Verdade',
    status:2
  };
  pessoa3 = {
    name:'Vida',
    status:3
  };



}
