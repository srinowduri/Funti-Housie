import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-number-generator',
  templateUrl: './number-generator.component.html',
  styleUrls: ['./number-generator.component.scss']
})
export class NumberGeneratorComponent implements OnInit {
  numberList: number[] = []; 
  number!: number;
  randomNumberList: number[] = []; 
  numOfRows:number[] = [0,1,2,3,4,5,6,7,8];
  numOfCols:number[] = [0,1,2,3,4,5,6,7,8,9];
  tableNums = new Array(9);
  boardCompleted: boolean;
  displayNumber: boolean;
  constructor(private SpinnerService: NgxSpinnerService){
    for(let i = 1; i < 91; i++){
      this.numberList.push(i);
    }
  }
  ngOnInit(){
    for(let i = 0; i < this.tableNums.length; i++){
      this.tableNums[i] = new Array(9);
      this.prevColorList[i] = new Array(9);
    }
    for (let i = 0; i < 9; i++) { 
      for (let j = 0; j < 10; j++) { 
          this.tableNums[i][j] = 0; 
          this.prevColorList[i][j] = {};
      } 
  } 
  }
  prevIndex: number = 0; 
  prevNumber: number = 0; 
  lastIndex: number = 0;  
  prevColorList = []; 
  row: number;  
  col: number; 
  prevRow: number; 
  prevCol: number;
  message: string = "Board Completed!!";
  numberGenerator(){
    this.displayNumber = false;
    this.SpinnerService.show();
    let randomIndex, randomNumber = 0; 
    if(this.randomNumberList.length < 90){
    setTimeout(() => {
      do{
         randomIndex = Math.floor(Math.random() * this.numberList.length);
       }while(this.randomNumberList.indexOf(randomIndex) !== -1);

       if(this.randomNumberList.length > 0){
         if(this.randomNumberList.length > 1){
           this.lastIndex = this.prevIndex;
         }
         this.prevNumber = this.number;
         this.prevIndex = this.prevNumber - 1;
       }
       randomNumber = this.numberList[randomIndex];
       this.number = randomNumber;
       this.prevRow = this.row;
       this.prevCol = this.col;
       if(this.prevNumber !== 0){
          this.row = Math.floor(this.prevNumber / 10);
          this.col = (this.prevNumber % 10)- 1;
           if((this.prevNumber % 10) === 0){
             this.row = this.row - 1;
             this.col = 9;
           }
          this.tableNums[this.row][this.col] = this.prevNumber;
          this.prevColorList[this.row][this.col] = {'background-color': 'LawnGreen'};
          if(this.prevRow !== undefined){
              this.prevColorList[this.prevRow][this.prevCol] = {'background-color': 'DeepSkyBlue'};
          }
       }
       this.randomNumberList.push(randomIndex);
       this.SpinnerService.hide();
       this.displayNumber = true;
    }, 1000);
    } else if(this.randomNumberList.length === 90){
      this.lastIndex = this.prevIndex;
      this.prevNumber = this.number;
      this.prevIndex = this.prevNumber - 1;
      this.prevRow = this.row;
      this.prevCol = this.col;
      
      if(this.prevNumber !== 0){
        this.row = Math.floor(this.prevNumber / 10);
        this.col = (this.prevNumber % 10)- 1;
         if((this.prevNumber % 10) === 0){
          this.row = this.row - 1;
           this.col = 9;
     }
      this.tableNums[this.row][this.col] = this.prevNumber;
      this.prevColorList[this.row][this.col] = {'background-color': 'LawnGreen'};
        if(this.prevRow !== undefined){
          this.prevColorList[this.prevRow][this.prevCol] = {'background-color': 'DeepSkyBlue'};
        }
        this.boardCompleted = true;
        this.SpinnerService.hide();
        this.displayNumber = true;
    }
    

  }
 
}

}
