import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EmojiGeneratorComponent } from './emoji-generator/emoji-generator.component';
import { NumberGeneratorComponent } from './number-generator/number-generator.component';
import { AlphabetGeneratorComponent } from './alphabet-generator/alphabet-generator.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgxSpinnerModule } from "ngx-spinner"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketsComponent } from './tickets/tickets.component';
import { ActionsComponent } from './actions/actions.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { TicketService } from './service/ticketService.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    EmojiGeneratorComponent,
    NumberGeneratorComponent,
    AlphabetGeneratorComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    TicketsComponent,
    ActionsComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [ TicketService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
