import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {PublishedWorksComponent} from "./published-works/published-works.component";
import {WritingSamplesComponent} from "./writing-samples/writing-samples.component";
import { PartyComponent } from './party/party.component';

export const routes = [
  {
    "path": "",
    "component": AboutComponent
  },
  {
    "path": "about",
    "component": AboutComponent
  },
  {
    "path": "services",
    "component": ServicesComponent
  },
  {
    "path": "contact",
    "component": ContactComponent,
  },
  {
    "path": "published-works",
    "component": PublishedWorksComponent
  },
  {
    "path": "party",
    "component": PartyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
