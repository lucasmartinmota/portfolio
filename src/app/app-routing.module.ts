import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

const routes: Routes = [{
  path: '', component: MainPageComponent
},
{
  path: 'about', component: AboutPageComponent
},
{
  path: 'projects', component: ProjectPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
