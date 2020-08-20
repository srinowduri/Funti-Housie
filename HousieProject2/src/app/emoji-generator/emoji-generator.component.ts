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
  emojiDone: boolean;
  tempEmojiList: number[] = [];
  codeList = ["FTY", "GST", "STY", "DOG", "DER", "EPT", "MOS", "KGR", "MSQ", "BRD", "SNK", "SPN", "ANT", "MNY", "BRS", "TRK", "PCK", "HEN", "PGN", "EGL", "DCK", "SWN", "DGN", "WHL", "DLP", "FSH", "SHK", "PPR", "PAM", "CRN", "PPL", "GRP", "CCT", "CRT", "BCH", "TOM", "BUS", "ICM", "HFV", "TCR", "FMR", "CHF", "MEC", "FWR", "DOC", "SNT", "ITW", "ART", "PLT", "AST", "SCS", "HBS", "BJL", "GLC", "ONN", "POP", "MTN", "BRC", "TPL", "TRN", "ATO", "CAR", "CRS", "BEE", "SHP", "SUN", "MON", "FRE", "SNW", "SNF", "CKE", "CCL", "WMN", "BCL", "PEN", "STL", "NBK", "CFE", "UMB", "MHM", "TTS", "HRS", "MDL", "CKT", "STL", "KTE", "DCE", "BEL", "DPM", "BLN", "CRT", "TSL", "FLG", "CDL", "CRB", "SMN", "WZD", "ZBR", "COW", "RNO"];
  constructor() { 
    for(let i = 1; i < 101; i++){
      this.emojiList.push(i);
    }
  }

  codeNumber: string; 
  count = 0; 
  prevEmoji: string;
  message = "Surprise Done!!"
  generateEmoji() {
    let randomEmojiIndex, randomEmojiNumber = 0; 
    
    if(this.tempEmojiList.length < 100){
      do{
        randomEmojiIndex = Math.floor(Math.random() * this.emojiList.length);
        //console.log("randam index: "+ randomEmojiIndex);
        //console.log("temp list: "+ this.tempEmojiList);
      }while(this.tempEmojiList.indexOf(randomEmojiIndex) !== -1);

      randomEmojiNumber = this.emojiList[randomEmojiIndex];
      this.codeNumber = this.codeList[randomEmojiIndex];
      this.count++;
      this.path = "assets/emojis/" + randomEmojiNumber + ".png";
      this.prevEmoji = this.emojiNum;
      this.emojiNum = this.path;
      this.tempEmojiList.push(randomEmojiIndex);
      if(this.prevEmoji !== undefined){
        this.showEmoji.push(this.prevEmoji);
      }
    } else if(this.tempEmojiList.length === 100){
      this.prevEmoji = this.emojiNum;
      this.emojiNum = this.path;
      if(this.showEmoji.length < 100){
        this.showEmoji.push(this.prevEmoji);
      }
    //  console.log(this.showEmoji);
      this.emojiDone = true;
    }
  }

}
