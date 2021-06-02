import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModuleClass } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ForgotpassComponent} from './forgotpass/forgotpass.component';
import { AuthService } from './auth/auth.service';
import {VerifyComponent} from './verify/verify.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { MyComponent } from './my/my.component';
import { YouComponent } from './you/you.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';






@NgModule({
  declarations: [
    AppComponent,LandingComponent,ForgotpassComponent,VerifyComponent, MyComponent,MyComponent, YouComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,RouterModuleClass,MatCardModule,MatFormFieldModule,
    NgOtpInputModule,MatAutocompleteModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [LandingComponent]
})
export class AppModule { }
