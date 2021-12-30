import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {WordDetailComponent} from "./word-detail/word-detail.component";


const routes: Routes = [{
  path: 'list',
  component: ListComponent,
},{
  path:'list/word/:id',
  component:WordDetailComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
