import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {

  selectedCrisis: Crisis;

  crises: Crisis[];
  crises$;
  selectedId: number;

  constructor(private crisisService: CrisisService, private service: CrisisService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
    );
  }

  onSelect(crisis: Crisis): void {
    this.selectedCrisis = crisis;
  }

  getCrises(): void {
    this.crisisService.getCrises()
      .subscribe((crises) => {
        this.crises = crises;
      });
  }
}
