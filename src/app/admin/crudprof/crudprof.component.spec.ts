import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudprofComponent } from './crudprof.component';

describe('CrudprofComponent', () => {
  let component: CrudprofComponent;
  let fixture: ComponentFixture<CrudprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
