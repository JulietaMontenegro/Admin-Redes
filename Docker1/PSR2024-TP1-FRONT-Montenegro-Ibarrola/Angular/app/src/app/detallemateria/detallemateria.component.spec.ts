import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallemateriaComponent } from './detallemateria.component';

describe('DetallemateriaComponent', () => {
  let component: DetallemateriaComponent;
  let fixture: ComponentFixture<DetallemateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallemateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallemateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
