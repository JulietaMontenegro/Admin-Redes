import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallealumnoComponent } from './detallealumno.component';

describe('DetallealumnoComponent', () => {
  let component: DetallealumnoComponent;
  let fixture: ComponentFixture<DetallealumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallealumnoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallealumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
