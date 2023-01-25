import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from 'src/app/model/player';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private api_path = environment.getApiPath();

  constructor(private http: HttpClient) { }

  public addUser(player: Player): void {
    console.log("Sending the player to the backend");
    console.log(player);
    console.log(this.api_path + "/addUser");
    this.http.post<Player>(this.api_path + "/addUser", player).subscribe(
      response => {
        console.log("Post is successfull");
        console.log(response);
      },
      err => {
        console.log("Post is unsuccessfull");
        console.log(err);
      },
      () => {
        console.log("The request is now complete");
      },
    )
  }

}
