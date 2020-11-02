import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressCollectionComponent } from './adress-collection.component';

describe('AdressCollectionComponent', () => {
  let component: AdressCollectionComponent;
  let fixture: ComponentFixture<AdressCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdressCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
