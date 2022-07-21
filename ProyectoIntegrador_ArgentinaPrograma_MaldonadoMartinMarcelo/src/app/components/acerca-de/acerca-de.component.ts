import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  //aca llamaria a nombre:, apellido:,img de persona
  //model
  persona: persona = new persona("", "", "");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }

}
