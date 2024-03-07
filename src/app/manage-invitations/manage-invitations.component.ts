import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-manage-invitations',
  templateUrl: './manage-invitations.component.html',
  styleUrls: ['./manage-invitations.component.css']
})
export class ManageInvitationsComponent implements OnInit {

  people:Person[];
  confirmed:Person[] = [];

  constructor(private personService:PersonService, private router:Router) { }

  ngOnInit(): void {
    this.getPersons();
  }

  private getPersons(){
    this.personService.getPeopleList().subscribe(data => {
      this.people = data.filter( (person) => !person.confirmed);
    })
  }

  drop(event: CdkDragDrop<Person[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  goToList() {
    this.router.navigate(['/invite']);
  }

  addPerson() {
    this.router.navigate(['add_person']);
  }

  invite() {
    this.confirmed.forEach( person => {
      person.confirmed = true;
      this.personService.updatePerson(person.id,person).subscribe( data => {
      },error => console.log(error));
    });
    this.confirmed = [];
    this.goToList();
  }

  updatePerson(id:number){
    this.router.navigate(['update_person',id]);
  }

  deletePerson(id:number){
    swal({
      title: 'Va a eliminar una persona',
      text: "Está seguro?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.personService.deletePerson(id).subscribe(data => {
          console.log(data);
          this.getPersons();
        })
      }
    })
  }

}
