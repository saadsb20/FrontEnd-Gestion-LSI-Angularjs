import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofComponent } from './editprof.component';

describe('EditprofComponent', () => {
  let component: EditprofComponent;
  let fixture: ComponentFixture<EditprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
