import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMateriaComponent } from './delete-materia.component';

describe('DeleteMateriaComponent', () => {
  let component: DeleteMateriaComponent;
  let fixture: ComponentFixture<DeleteMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
