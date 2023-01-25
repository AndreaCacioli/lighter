import { Component } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { Player } from '../model/player';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private httpService: HttpService) { }

  sayHello() {
    const player: Player = new Player("Ronaldinho");
    this.httpService.addUser(player);
  }

  ngOnInit() {
    console.log("Initialized!");
  }

}
