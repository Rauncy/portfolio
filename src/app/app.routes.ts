import { Routes } from '@angular/router';

import { ReferencesComponent } from './references/references.component';
import { IndexComponent } from './index/index.component';

export const routes : Routes = [
    { path: '', component: IndexComponent },
    { path: 'references', component: ReferencesComponent },
];