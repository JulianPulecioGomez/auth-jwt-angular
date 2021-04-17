import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo:'/login' },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent, },
]

export const APP_ROUTING = RouterModule.forRoot(ROUTES)