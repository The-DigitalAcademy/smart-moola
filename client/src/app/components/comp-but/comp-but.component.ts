import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service


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
  // // @Input() text: string = 'Submit'; // Set a default value for the 'text' property
 
  // // constructor(private router: Router) {} // Inject the Router service
  // // goToHomepage() {
  // //   // Implement the logic to navigate to the homepage here
  // //   // For example, if your homepage route is '/home', you can do:
  // //   this.router.navigate(['/home']);
  // }

}
