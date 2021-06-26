import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// component
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { AdvantagesComponent } from './shared/component/advantages/advantages.component';
import { InitiativesComponent } from './shared/component/initiatives/initiatives.component';
import { OpportunitiesComponent } from './shared/component/opportunities/opportunities.component';
import { AchievementsComponent } from './shared/component/achievements/achievements.component';
import { PartnershipsComponent } from './shared/component/partnerships/partnerships.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ConnectUsComponent } from './shared/component/connect-us/connect-us.component';
import { LoadingComponent } from './shared/component/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AdvantagesComponent,
    InitiativesComponent,
    OpportunitiesComponent,
    AchievementsComponent,
    PartnershipsComponent,
    FooterComponent,
    ConnectUsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule, ReactiveFormsModule,
    SlickCarouselModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
