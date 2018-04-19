import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

  title: any = 'List of Authors';
  authors: any;

  constructor(authorsService: AuthorsService) {
     this.authors = authorsService.getAuthors();
   }

  ngOnInit() {
    // this.doAuthors();
  }

}
