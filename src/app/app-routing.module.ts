import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'HOME PAGE' },
  { path: 'about', component: AboutComponent, title: 'ABOUT PAGE' },
  { path: 'portfolio', component: PortfolioComponent, title: 'POTOFILO PAGE' },
  { path: 'contact', component: ContactComponent, title: 'CONTACT PAGE' },
  { path: '**', component: PageErrorComponent, title: 'NOTFOUND PAGE' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
