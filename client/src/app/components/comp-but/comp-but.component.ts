import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-but',
  templateUrl: './comp-but.component.html',
  styleUrls: ['./comp-but.component.css']
})
export class CompButComponent {
  @Input()
  className!: string;
  @Input()
  submitClassName!: string;
  @Input() text: string = 'Submit'; // Set a default value for the 'text' property
}
