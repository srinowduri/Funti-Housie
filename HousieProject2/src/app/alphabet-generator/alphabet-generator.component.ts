import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet-generator',
  templateUrl: './alphabet-generator.component.html',
  styleUrls: ['./alphabet-generator.component.scss']
})
export class AlphabetGeneratorComponent implements OnInit {
  alphabetsList = ["అ","ఆ","ఇ","ఈ","ఉ","ఊ","ఋ","ౠ","ఎ","ఏ","ఐ","ఒ","ఓ","ఔ","0","0","0","అం","అః","0","0","0","క","ఖ","గ","ఘ","ఙ","0","0","చ","ఛ","జ","ఝ","ఞ","0","0","ట","ఠ","డ","ఢ","ణ","0","0","త","థ","ద","ధ","న","0","0","ప","ఫ","బ","భ","మ","0","య","ర","ల","వ","శ","ష","0","0","స","హ","ళ","క్ష","ఱ","0"];

  tempAlphaList:number[] = [14,15,16,19,20,21,27,28,34,35,41,42,48,49,55,62,63,69]; 
  
  alphabet: string;

  numOfCols: number[] = [0,1,2,3,4,5,6];
  numOfRows: number[]  = [0,1,2,3,4,5,6,7,8,9];
  alphaTable = new Array(10);
  boardCompleted: boolean;
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < this.alphaTable.length; i++){
      this.alphaTable[i] = new Array(10);
      this.alphaColorList[i] = new Array(10);
    }
    for (let i = 0; i < 9; i++) { 
      for (let j = 0; j < 6; j++) { 
          this.alphaTable[i][j] = -1; 
          this.alphaColorList[i][j] = {};
      } 
  } 
 
  }
  row: number;  
  col: number;
  prevRow: number; 
  prevCol: number;
  alphaColorList = [];
  lastAlphaIndex: number; 
  prevIndex:number; 
  prevAlpha: string; 
  message = "Surprise Done!!";
  randomAlphaIndex: number = 0;  
  randomAlphabet: string;

  generateAlphabet(){
   
  	if(this.tempAlphaList.length < 70){
		  do{
			  this.randomAlphaIndex = Math.floor(Math.random() * this.alphabetsList.length);
      }while(this.tempAlphaList.indexOf(this.randomAlphaIndex) !== -1);

      if(this.tempAlphaList.length > 18){
        if(this.tempAlphaList.length > 19){
          this.lastAlphaIndex = this.prevIndex;
        }
       
        this.prevAlpha = this.alphabet;
       
        this.prevIndex = this.alphabetsList.indexOf(this.prevAlpha);
      }
      this.randomAlphabet = this.alphabetsList[this.randomAlphaIndex];
      this.alphabet = this.randomAlphabet;
     
        this.prevRow = this.row;
        this.prevCol = this.col;
        if(this.prevIndex >= 0) {
        this.row = Math.floor(this.prevIndex / 7);
        this.col = (this.prevIndex % 7);
      
        this.alphaTable[this.row][this.col] = this.prevAlpha;
        this.alphaColorList[this.row][this.col] = {'background-color': 'Yellow'};
    }
        if(this.prevRow !== undefined){
          this.alphaColorList[this.prevRow][this.prevCol] = {'background-color': 'Aqua'};
        }
      this.tempAlphaList.push(this.randomAlphaIndex);
    
    } else if(this.tempAlphaList.length === 70){
     
      this.lastAlphaIndex = this.prevIndex;
     
     
      this.prevRow = this.row;
      this.prevCol = this.col;
      this.row = Math.floor(this.randomAlphaIndex / 7);
      this.col = (this.randomAlphaIndex % 7);

      this.alphaTable[this.row][this.col] = this.alphabet;

        this.alphaColorList[this.row][this.col] = {'background-color': 'Yellow'};
        if(this.prevRow !== undefined){
          this.alphaColorList[this.prevRow][this.prevCol] = {'background-color': 'aqua'};
        }

        this.boardCompleted = true;
    }
  }
}
