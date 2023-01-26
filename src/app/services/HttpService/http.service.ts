import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public addUser(): void {
    let player = { firstname: "Ronaldinho" };
    this.http.post(environment.api_path + 'addUser', player).subscribe({
      next: (success) => {
        console.log("Everithing went fine", success);
      },
      error: (failure) => {
        console.error("an error occurred", failure);
      },
      complete: () => {
        console.log("Done");
      }
    });
  }
}
