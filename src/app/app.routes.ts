import { AboutComponent } from './about';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'detail', loadChildren: () => System.import('./+detail')
            .then((comp: any) => comp.default),
    },
    { path: '**', component: NoContentComponent },
];
