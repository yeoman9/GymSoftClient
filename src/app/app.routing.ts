﻿import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';

const routes: Routes = [
    { path: '', 
      component: HomeComponent, canActivate: [AuthGuard],
      children: [
        { path: 'addCustomer', 
          component: CustomerComponent, 
          canActivate: [AuthGuard]
        },
        { path: 'listCustomer', 
          component: CustomerListComponent, 
          canActivate: [AuthGuard]
        },
        { path: 'viewCustomer/:id', 
          component: CustomerViewComponent, 
          canActivate: [AuthGuard]
        }
      ]
    },
    { path: 'login', component: LoginComponent },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);