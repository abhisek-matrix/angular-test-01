import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../shared/shared.module';
import { authRoutes } from '../auth/auth.routing';
import { AuthComponent } from '../auth/auth.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
    declarations: [
        AuthComponent,
        SignInComponent

    ],
    imports     : [
        RouterModule.forChild(authRoutes),
        // MatButtonModule,
        // MatButtonToggleModule,
        // MatDividerModule,
        // MatIconModule,
        // MatMenuModule,
        // MatProgressBarModule,
        // MatSortModule,
        // MatTableModule,
        // MatTooltipModule,
        // NgApexchartsModule,
       SharedModule
    ]
})
export class AuthModule
{
}
