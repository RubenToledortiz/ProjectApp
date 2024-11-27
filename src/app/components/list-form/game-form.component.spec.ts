import { ComponentFixture, TestBed } from '@angular/core/testing';

import { listFormComponent } from './game-form.component';

describe('GameFormComponent', () => {
  let component: listFormComponent;
  let fixture: ComponentFixture<listFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ listFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(listFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
