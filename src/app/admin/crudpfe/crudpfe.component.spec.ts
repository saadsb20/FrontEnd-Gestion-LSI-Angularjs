import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudpfeComponent } from './crudpfe.component';

describe('CrudpfeComponent', () => {
  let component: CrudpfeComponent;
  let fixture: ComponentFixture<CrudpfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudpfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudpfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
