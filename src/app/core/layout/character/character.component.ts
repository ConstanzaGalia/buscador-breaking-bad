import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../../service/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: any = {};
  response: any = [];
  constructor(private activatedRoute:ActivatedRoute, private service:CharactersService) { }

  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.id
    this.response = await this.service.getSingle(params);
    this.character = this.response[0];
    console.log(this.character)
  }

}
