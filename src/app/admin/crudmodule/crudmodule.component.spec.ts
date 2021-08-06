import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudmoduleComponent } from './crudmodule.component';

describe('CrudmoduleComponent', () => {
  let component: CrudmoduleComponent;
  let fixture: ComponentFixture<CrudmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
