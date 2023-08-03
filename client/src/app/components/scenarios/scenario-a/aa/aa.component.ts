import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-aa',
  templateUrl: './aa.component.html',
  styleUrls: ['./aa.component.css']
})
export class AaComponent implements OnInit {
verifyAnswer() {
   this.router.navigate(["/answers"])

}
submitMandla() {
throw new Error('Method not implemented.');
}

  question : any

  constructor(private router : Router , private questionsService : QuestionService) { }

  ngOnInit(): void {
    
      // this.questionsService.getQnA().subscribe(data =>{
      //   console.log(data,"data received");
        
      // })
    
  }



 


 
  }
    




