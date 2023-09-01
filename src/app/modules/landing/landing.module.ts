import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { landingRoutes } from '../landing/landing.routing';
import { LandingComponent } from '../landing/landing.component';
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        LandingComponent,
        HomeComponent

    ],
    imports     : [
        RouterModule.forChild(landingRoutes),
       SharedModule
    ]
})
export class LandingModule
{
}
