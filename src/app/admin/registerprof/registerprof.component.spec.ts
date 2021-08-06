import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterprofComponent } from './registerprof.component';

describe('RegisterprofComponent', () => {
  let component: RegisterprofComponent;
  let fixture: ComponentFixture<RegisterprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
