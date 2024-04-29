import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNotaComponent } from './delete-nota.component';

describe('DeleteNotaComponent', () => {
  let component: DeleteNotaComponent;
  let fixture: ComponentFixture<DeleteNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteNotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
