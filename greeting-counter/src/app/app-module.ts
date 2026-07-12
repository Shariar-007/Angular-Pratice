import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { GreetingCardComponent } from './greeting-card/greeting-card.component';
import {UserCard} from './user-card/user-card.component';
import {StatusBadge} from './user-card/status-badge/status-badge.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HighLightDirective } from './highlight.directive';
import { AppIfDirective } from './appIf.directive';
import { CounterDisplayComponent} from './counter-display/counter-display.component';

@NgModule({
  declarations: [
    App,
    GreetingCardComponent,
    UserCard,
    StatusBadge,
    HomePageComponent,
    AboutPageComponent,
    CounterDisplayComponent,
    HighLightDirective,
    AppIfDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
