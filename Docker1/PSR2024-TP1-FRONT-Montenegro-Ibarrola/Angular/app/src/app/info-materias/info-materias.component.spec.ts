import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMateriasComponent } from './info-materias.component';

describe('InfoMateriasComponent', () => {
  let component: InfoMateriasComponent;
  let fixture: ComponentFixture<InfoMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoMateriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
