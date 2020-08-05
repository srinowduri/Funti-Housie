import { Component } from '@angular/core';

@Component({
  selector: 'app-emoji-generator',
  templateUrl: './emoji-generator.component.html',
  styleUrls: ['./emoji-generator.component.scss']
})
export class EmojiGeneratorComponent  {
  emojiList: number[] = []; 
  emojiNum: string; 
  showEmoji: string[] = [];
  path: string;
  tempEmojiList: number[] = [];
  codeList = ["SML", "GRN", "LOL", "SLF", "FSF", "TON", "SLP", "CBH", "PTY", "COL", "SAD", "CRY", "GST", "DSB", "DHB", "DTB", "WIN", "CRS", "HRY", "DAN", "PNT", "HIT", "NAM", "KID", "SDY", "FET", "DOG", "RCN", "TGR", "UCN", "RDR", "EPT", "MOS", "RBT", "SQL", "PAW", "BRD", "SNK", "OCP", "ANT", "MNY", "MSK", "YWN", "BMB", "CLP", "SLF", "NNY", "TAT", "PIG", "CML", "PND", "HEN", "PGN", "EGL", "DUC", "SWN", "TRX", "WHL", "DLP", "FSH", "SHK", "BLY", "XMS", "PAM", "RCE", "MPL", "MNG", "BAN", "CCT", "CRT", "PUT", "CHZ", "PIZ", "PCN", "ICM"];	
  constructor() { 
    for(let i = 1; i < 76; i++){
      this.emojiList.push(i);
    }
  }

  codeNumber: string; 
  count = 0; 
  prevEmoji: string;
  message = "Surprise Done!!"
  generateEmoji() {
    let randomEmojiIndex, randomEmojiNumber = 0; 
    
    if(this.tempEmojiList.length < 76){
      do{
        randomEmojiIndex = Math.floor(Math.random() * this.emojiList.length);
      }while(this.tempEmojiList.indexOf(randomEmojiIndex) !== -1);

      randomEmojiNumber = this.emojiList[randomEmojiIndex];
      this.codeNumber = this.codeList[randomEmojiIndex];
      this.count++;
      this.path = "assets/emojis/" + randomEmojiNumber + ".png";
      this.prevEmoji = this.emojiNum;
      this.emojiNum = this.path;
      this.tempEmojiList.push(randomEmojiIndex);
      this.showEmoji.push(this.prevEmoji);
     
    }
  }

}
