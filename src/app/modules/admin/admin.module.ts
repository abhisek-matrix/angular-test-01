import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { adminRoutes } from '../admin/admin.routing';
import { ComponentsModule } from '../../components/components.module';

import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from '../../modules/admin/dashboard/dashboard.component';
import { UserProfileComponent } from '../../modules/admin/user-profile/user-profile.component';
import { TableListComponent } from '../../modules/admin/table-list/table-list.component';
import { TypographyComponent } from '../../modules/admin/typography/typography.component';
import { IconsComponent } from '../../modules/admin/icons/icons.component';
import { MapsComponent } from '../../modules/admin/maps/maps.component';
import { NotificationsComponent } from '../../modules/admin/notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        DashboardComponent,
        UserProfileComponent,
        TableListComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,

    ],
    imports     : [
        RouterModule.forChild(adminRoutes),
        SharedModule,
        ChartsModule,
        NgbModule,
        ToastrModule.forRoot(),
        ComponentsModule
    ]
})
export class AdminModule
{
}
