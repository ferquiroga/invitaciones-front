import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './add-person/add-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { ManageInvitationsComponent } from './manage-invitations/manage-invitations.component';

const routes: Routes = [
  {path: 'invite', component:ManageInvitationsComponent},
  {path: '', redirectTo: 'invite', pathMatch: 'full'},
  {path: 'add_person', component: AddPersonComponent},
  {path: 'update_person/:id', component: UpdatePersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
