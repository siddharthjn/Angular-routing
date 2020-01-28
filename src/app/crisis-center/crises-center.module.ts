import { CrisisCenterRoutingModule } from './crises-center-routing.module';
import { FormsModule } from '@angular/forms';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';


@NgModule({
  declarations: [CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterComponent,
    CrisisCenterHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CrisisCenterRoutingModule,
  ]
})
export class CrisisCenterModule { }
