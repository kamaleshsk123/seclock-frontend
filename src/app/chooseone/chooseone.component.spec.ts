import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseoneComponent } from './chooseone.component';

describe('ChooseoneComponent', () => {
  let component: ChooseoneComponent;
  let fixture: ComponentFixture<ChooseoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
