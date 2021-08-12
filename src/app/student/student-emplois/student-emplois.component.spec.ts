import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEmploisComponent } from './student-emplois.component';

describe('StudentEmploisComponent', () => {
  let component: StudentEmploisComponent;
  let fixture: ComponentFixture<StudentEmploisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentEmploisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEmploisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
