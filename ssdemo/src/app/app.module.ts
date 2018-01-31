import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/user-list/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { AppRoutingModule } from './app-routing.module';

import { RequirementDetailComponent } from './requirement-manage/requirement-detail/requirement-detail.component';
import { RequirementsComponent } from './requirement-manage/requirement-list/requirements.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { UserService } from './service/user.service';
import { RequirementService } from './service/requirement.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    RequirementsComponent,
    RequirementDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ UserService,RequirementService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
