import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NumberGeneratorComponent } from './number-generator/number-generator.component';
import { EmojiGeneratorComponent } from './emoji-generator/emoji-generator.component';
import { AlphabetGeneratorComponent } from './alphabet-generator/alphabet-generator.component';


const routes: Routes = [
  { path:'number', component: NumberGeneratorComponent },
  { path:'emoji', component: EmojiGeneratorComponent },
  { path:'alpha', component: AlphabetGeneratorComponent },
  { path:'', redirectTo:'/number', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
