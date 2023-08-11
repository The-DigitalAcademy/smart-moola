import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class responseComponent implements OnInit {
  question!: string;
  explanation!: string;
  error!: string;

  constructor() { }

  ngOnInit(): void {
  }

  async getMeaning(): Promise<void> {
    try {
      const response = await axios.post('/api/meaning', { question: this.question });
      this.explanation = response.data.explanation;
      this.error = 'null';
    } catch (error) {
      this.error = 'Error fetching meaning.';
      console.error('Error fetching meaning:', error);
    }
  }
}
