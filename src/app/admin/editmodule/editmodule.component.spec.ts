import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmoduleComponent } from './editmodule.component';

describe('EditmoduleComponent', () => {
  let component: EditmoduleComponent;
  let fixture: ComponentFixture<EditmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
