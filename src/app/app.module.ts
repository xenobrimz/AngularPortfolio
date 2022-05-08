import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbTabsetModule, NbCardModule, NbButton, NbButtonModule, NbWindowModule, NbIconModule, NbListModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { TabsComponent } from './tabs/tabs.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LinksComponent } from './links/links.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillListComponent } from './skill-list/skill-list.component';
import { ProjectsComponent } from './projects/projects.component';




@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TabsComponent,
    ContactsComponent,
    LinksComponent,
    SkillListComponent,
    ProjectsComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbListModule,
    FontAwesomeModule,
    NbAccordionModule,
    AppRoutingModule,
    NbIconModule,
    NbWindowModule.forRoot(),
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
