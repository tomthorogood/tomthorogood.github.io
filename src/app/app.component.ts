import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  renderNav = true;

  ngOnInit(): void {
    if (window.location.pathname === '/party') {
      this.renderNav = false;
    }
  }
}
