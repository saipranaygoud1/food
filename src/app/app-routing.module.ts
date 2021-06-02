import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { LandingComponent } from './landing/landing.component';
import { VerifyComponent } from './verify/verify.component';


export const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingComponent},
    { path : 'landing',component:LandingComponent},
    { path: 'forgotpass', component: ForgotpassComponent},
    { path: 'verify', component: VerifyComponent},
    { path: '**', redirectTo:'/signup' },
      
];

@NgModule({
    exports : [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class RouterModuleClass { }
