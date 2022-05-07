import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  pages = [
    {
      "title": "about",
      "path": "/about",
    },
    {
      "title": "published works",
      "path": "/published-works"
    },
    {
      "title": "contact",
      "path": "/contact"
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
