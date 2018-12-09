import { Component, OnInit } from '@angular/core';
import { RouterModule , Routes} from '@angular/router';
import { UserFormsComponent } from './AtelierForm/user-forms/user-forms.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PageNotFoundComponent } from './Direction/page-not-found/page-not-found.component';
import { AboutComponent } from './Direction/about/about.component';
import { ListAnnoncesComponent } from './ExamenGl/list-annonces/list-annonces.component';
import { EstimationCoutComponent } from './ExamenGl/estimation-cout/estimation-cout.component';
import { AnnoncesComponent } from './ExamenGl/annonces/annonces.component';


const appRoutes: Routes = [
    {
        path : '' ,
        component : AnnoncesComponent
        // component : UserFormsComponent
    }
    ,
    {
        path : 'about' ,
        component : AboutComponent
    }
    ,
    {
        path : 'list' ,
        component : ListAnnoncesComponent
    }
    ,
    {
        path : 'estimation' ,
        component : EstimationCoutComponent
    }
    ,
    {
        path : '' ,
        redirectTo : '/' ,
        pathMatch : 'full'
    }
    ,
    {
        path : '**' ,
        component : PageNotFoundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
