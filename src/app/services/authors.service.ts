import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  public listOfAuthors: any[] = ['Author1', 'Author2', 'Author3', 'Author4'];

  getAuthors() {
    console.log(this.listOfAuthors);
    return this.listOfAuthors;
  }
}
