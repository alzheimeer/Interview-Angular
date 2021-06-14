import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlempleadoComponent } from './controlempleado.component';

describe('ControlempleadoComponent', () => {
  let component: ControlempleadoComponent;
  let fixture: ComponentFixture<ControlempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
