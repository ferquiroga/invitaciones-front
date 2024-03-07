import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person:Person = new Person();

  constructor(private personService:PersonService, private router:Router) { }

  ngOnInit(): void {
    
  }

  addPerson(){
    this.person.confirmed = false;
    this.personService.addPerson(this.person).subscribe(dato => {
      console.log(this.person);
      this.goToList();
    },error => console.log(error));
  }

  goToList() {
    this.router.navigate(['/invite']);
  }

  onSubmit() {
    this.addPerson();
  }

}
