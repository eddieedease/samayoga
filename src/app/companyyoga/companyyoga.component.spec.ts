import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyyogaComponent } from './companyyoga.component';

describe('CompanyyogaComponent', () => {
  let component: CompanyyogaComponent;
  let fixture: ComponentFixture<CompanyyogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyyogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyyogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
