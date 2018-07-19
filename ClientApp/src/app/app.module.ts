import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';
import {MapdataService} from './mapdata.service';
import { MakemoneyComponent } from './makemoney/makemoney.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
      UsersComponent,
      DetailsComponent,
      PostsComponent,
      FetchDataComponent,
      MapsComponent,
      MakemoneyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'maps/:address', component: MapsComponent, pathMatch: 'full'},
      { path: 'posts', component: PostsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'makemoney', component: MakemoneyComponent }
    ]),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyD2Z6Qxu800VvcoQaVJBqbjVenUyzsQ3oA'})
  ],
  providers: [DataService, MapdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
