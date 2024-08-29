import { Routes } from '@angular/router';
import { AddEstudentComponent } from './addEstudent/addEstudent.component';
import { DetailEstudentComponent } from './detailEstudent/detailEstudent.component';

export const routes: Routes = [
    {
        path: 'create', component: AddEstudentComponent
    },
    {
        path: 'detail', component: DetailEstudentComponent
    },
    {
        path: '*', component: AddEstudentComponent
    },
];
