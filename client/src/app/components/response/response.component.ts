import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class responseComponent implements OnInit {
  word!: string;
  explanation!: string;
  error!: string;

  constructor() { }

  ngOnInit(): void {
  }

  async getMeaning(): Promise<void> {
    try {
      const response = await axios.post('/api/meaning', { word: this.word });
      this.explanation = response.data.explanation;
      this.error = 'null';
    } catch (error) {
      this.error = 'Error fetching meaning.';
      console.error('Error fetching meaning:', error);
    }
  }
}
