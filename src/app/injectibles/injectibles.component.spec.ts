import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectiblesComponent } from './injectibles.component';

describe('InjectiblesComponent', () => {
  let component: InjectiblesComponent;
  let fixture: ComponentFixture<InjectiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectiblesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InjectiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
