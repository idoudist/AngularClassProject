import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { FilmsComponent } from './Exercice1/films/films.component';
import { ActorComponent } from './Exercice2/actor/actor.component';
import { ActorsComponent } from './Exercice2/actors/actors.component';
import { UserFormComponent } from './Component/user-form/user-form.component';
import { AreaComponent } from './Component/area/area.component';
import { EventsComponent } from './Component/events/events.component';
import { HttpModule } from '@angular/http';
import { UserFormsComponent } from './AtelierForm/user-forms/user-forms.component';
import { routing } from './app.routing';
import { AboutComponent } from './Direction/about/about.component';
import { PageNotFoundComponent } from './Direction/page-not-found/page-not-found.component';
import { AnnoncesComponent } from './ExamenGl/annonces/annonces.component';
import { ListAnnoncesComponent } from './ExamenGl/list-annonces/list-annonces.component';
import { CoutAnnoncesComponent } from './ExamenGl/cout-annonces/cout-annonces.component';
import { EstimationCoutComponent } from './ExamenGl/estimation-cout/estimation-cout.component';
import { PageComponent } from './ExamenGl/page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    ActorComponent,
    ActorsComponent,
    UserFormComponent,
    AreaComponent,
    EventsComponent,
    UserFormsComponent,
    AboutComponent,
    PageNotFoundComponent,
    AnnoncesComponent,
    ListAnnoncesComponent,
    CoutAnnoncesComponent,
    EstimationCoutComponent,
    PageComponent
  ],
  imports: [
    BrowserModule , FormsModule , HttpModule , routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
