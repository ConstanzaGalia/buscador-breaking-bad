import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  chars: any = [];
  filteredChars: any = [];
  searchName: string = '';

  constructor(private service: CharactersService) {}

  async ngOnInit(){
    const characters : any = await this.service.getAll();
    this.chars = characters;
    this.filteredChars = characters;
  }

  searchCharacter(){
    this.filteredChars = this.chars.filter((character: any) => 
    character.name.toLowerCase().includes(this.searchName.toLowerCase())) 
  }

}
