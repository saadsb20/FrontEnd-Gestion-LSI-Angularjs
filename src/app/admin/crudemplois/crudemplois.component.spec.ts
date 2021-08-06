import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudemploisComponent } from './crudemplois.component';

describe('CrudemploisComponent', () => {
  let component: CrudemploisComponent;
  let fixture: ComponentFixture<CrudemploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudemploisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudemploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
