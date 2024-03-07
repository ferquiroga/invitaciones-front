import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  id:number;
  person:Person = new Person();
  constructor(private personService:PersonService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.getPersonById(this.id).subscribe(dato =>{
      this.person = dato;
    },error => console.log(error));
  }

  goToList() {
    this.router.navigate(['/invite']);
  }

  onSubmit(){
    this.personService.updatePerson(this.id,this.person).subscribe( data => {
      this.goToList();
    },error => console.log(error));
  }
}
