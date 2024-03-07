import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PeopleListComponent } from './people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonComponent } from './add-person/add-person.component';
import { FormsModule } from '@angular/forms';
import { UpdatePersonComponent } from './update-person/update-person.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ManageInvitationsComponent } from './manage-invitations/manage-invitations.component';

@NgModule({
  declarations: [
    AppComponent,
    //PeopleListComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    ManageInvitationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
