import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { InterceptorComponent } from './interceptor/interceptor.component'
import { LoginGuard } from 'angular-spa/auth'

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [LoginGuard] },
    { path: 'interceptor', component: InterceptorComponent }
]

export const routes = RouterModule.forRoot(appRoutes)
