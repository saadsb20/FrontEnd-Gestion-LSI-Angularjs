import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCoursComponent } from './student-cours.component';

describe('StudentCoursComponent', () => {
  let component: StudentCoursComponent;
  let fixture: ComponentFixture<StudentCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
