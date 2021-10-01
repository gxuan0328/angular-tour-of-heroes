import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
// import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // chapter 5 目前沒使用到
  // selectedHero?: Hero;

  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }


  
  
  constructor( private heroService: HeroService) { }
  // heroes = HEROES;
  heroes: Hero[] = [];

  getHeroes(): void {
    // 同步
    // this.heroes = this.heroService.getHeroes();

    // 非同步
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero):void {
    this.heroes = this.heroes.filter(h => h!== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnInit(): void {
    this.getHeroes();
  }



}
