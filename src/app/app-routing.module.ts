import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AuthGuard } from './guard/auth-guard';
import { SearchUIComponent } from './components/search-ui/search-ui.component';
import { MobilesDisplayComponent } from './components/mobiles-display/mobiles-display.component';

const routes: Routes = [
  {
    path:'',
    component:SearchUIComponent,
    canActivate:[AuthGuard],
    // the user need to have this roles to access
    data:{
      roles:['manager']
    }
  },
  {path:'mobiles',
component:MobilesDisplayComponent,
canActivate:[AuthGuard],
data:{
  roles:['manager']
}},
  {
    path:'access-denied',component: AccessDeniedComponent, canActivate:[AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
