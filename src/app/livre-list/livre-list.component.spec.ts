import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreListComponent } from './livre-list.component';

describe('LivreListComponent', () => {
  let component: LivreListComponent;
  let fixture: ComponentFixture<LivreListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivreListComponent]
    });
    fixture = TestBed.createComponent(LivreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
