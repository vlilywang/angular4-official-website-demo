import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/user-list/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

import { RequirementDetailComponent } from './requirement-manage/requirement-detail/requirement-detail.component';
import { RequirementsComponent } from './requirement-manage/requirement-list/requirements.component';

const routes: Routes = [
  // { path: '',redirectTo: '/', pathMatch: 'full' },
  { path: 'users/detail/:id', component: UserDetailComponent},
  { path: 'users', component: UsersComponent},
  { path: 'requirments', component: RequirementsComponent},
  { path: 'requirements/detail/:id', component: RequirementDetailComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
