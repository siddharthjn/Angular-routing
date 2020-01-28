import { Observable } from 'rxjs';
import { HeroService } from './../hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  private hero$;

  constructor(private route: ActivatedRoute, private router: Router, private service: HeroService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.hero$ = this.service.getHero(id);
    this.hero$.subscribe((hero) => {
      this.hero = hero;
    });
    // this.hero$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     return this.service.getHero(params.get('id'));
    //   })
    // );
  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
