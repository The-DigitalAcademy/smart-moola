import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indebted-response',
  templateUrl: './indebted-response.component.html',
  styleUrls: ['./indebted-response.component.css']
})
export class IndebtedResponseComponent implements OnInit {

  constructor() { }

  progressPercentage = 25;

  ngOnInit(): void {
  }

}
