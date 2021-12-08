import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Pokemon } from './data/model';
import { PokedexService } from './services/pokedex.service';

describe('AppComponent', () => {
  let pokedexServiceSpy: jasmine.SpyObj<PokedexService>;

  beforeEach(async () => {
    pokedexServiceSpy = jasmine.createSpyObj('PokedexService', ['getPokemon']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        {
          provide: PokedexService,
          useValue: pokedexServiceSpy,
        },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // assert
    expect(component).toBeTruthy();
  });

  it('should call getPokemon on init', () => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;

    // act
    component.ngOnInit();

    // assert
    expect(pokedexServiceSpy.getPokemon).toHaveBeenCalled();
  });

  it('should select a pokemon onPokemonSelectedInList', () => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const testPokemon = { id: 1337 } as Pokemon;

    // act
    component.onPokemonSelectedInList(testPokemon);

    // assert
    expect(component.selectedPokemonDetail).toEqual(testPokemon);
  });

  it('should catch a pokemon, in uneven minutes only', () => {
    // arrange
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const testPokemon = { id: 1337 } as Pokemon;
    const currentMinute = new Date().getMinutes();

    // act
    component.onPokemonCaught(testPokemon);

    // assert
    if (currentMinute % 2 === 0) {
      expect(component.selectedPokemonIds).toContain(testPokemon.id);
    } else {
      expect(component.selectedPokemonIds).toEqual([]);
    }
  });
});
