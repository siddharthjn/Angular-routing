import { Observable } from 'rxjs';
import { CrisisService } from '../crisis.service';
import { Component, OnInit, Input } from '@angular/core';
import { Crisis } from '../crisis';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {

  crisis: Crisis;
  private crisis$;

  constructor(private route: ActivatedRoute, private router: Router, private service: CrisisService) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      const id = url[0].path;
      this.crisis$ = this.service.getCrisis(id);
      this.crisis$.subscribe((crisis) => {
        this.crisis = crisis;
        console.log(crisis);
      });
    });

  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate(['/crisises', { id: crisisId, foo: 'foo' }]);
  }

}
