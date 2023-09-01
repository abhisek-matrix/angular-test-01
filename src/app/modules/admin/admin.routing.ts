import { Route } from '@angular/router';
import { AdminLayoutComponent } from '../../layouts/admin-layout/admin-layout.component';
import { AuthGuard, CheckAuth } from '../../shared/guards/auth.guard';

import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { UserProfileComponent } from '../admin/user-profile/user-profile.component';
import { TableListComponent } from '../admin/table-list/table-list.component';
import { TypographyComponent } from '../admin/typography/typography.component';
import { IconsComponent } from '../admin/icons/icons.component';
import { MapsComponent } from '../admin/maps/maps.component';
import { NotificationsComponent } from '../admin/notifications/notifications.component';


export const adminRoutes: Route[] = [     
                {
                    path:'',
                    component:AdminLayoutComponent,
                    canActivate: [AuthGuard],
                    children: [
                    { path: '',      component: DashboardComponent },
                    { path: 'dashboard',      component: DashboardComponent },
                    { path: 'user-profile',   component: UserProfileComponent },
                    { path: 'table-list',     component: TableListComponent },
                    { path: 'typography',     component: TypographyComponent },
                    { path: 'icons',          component: IconsComponent },
                    { path: 'maps',           component: MapsComponent },
                    { path: 'notifications',  component: NotificationsComponent },
                     
                    ],
                    
                
                }
];
