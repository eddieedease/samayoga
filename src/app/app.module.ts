import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import {
  HttpModule,
  JsonpModule
} from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';

// Service
import { EdSerService } from './ed-ser.service';

import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { AboutComponent } from './about/about.component';
import { KindsyogaComponent } from './kindsyoga/kindsyoga.component';
import { CompanyyogaComponent } from './companyyoga/companyyoga.component';
import { ContactComponent } from './contact/contact.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AvComponent } from './av/av.component';
import { CoachingComponent } from './coaching/coaching.component';
import { AgendaComponent } from './agenda/agenda.component';



const appRoutes: Routes = [
  { path: 'site', component: SiteComponent },
  { path: 'over', component: AboutComponent },
  { path: 'yogalessen', component: KindsyogaComponent },
  { path: 'bedrijfsyoga', component: CompanyyogaComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'algemenevoorwaarden', component: AvComponent },
  { path: '',
    redirectTo: '/site',
    pathMatch: 'full'
  },
  { path: '**', component: SiteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    AboutComponent,
    KindsyogaComponent,
    CompanyyogaComponent,
    ContactComponent,
    AvComponent,
    CoachingComponent,
    AgendaComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: false } // <-- debugging purposes only
    ),
    BrowserModule,
    ToastrModule.forRoot(),
    HttpModule,
    JsonpModule,
    FormsModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({}),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [EdSerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
