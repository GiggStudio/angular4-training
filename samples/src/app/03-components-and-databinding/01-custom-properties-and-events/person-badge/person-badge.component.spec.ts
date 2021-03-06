import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonBadgeComponent } from './person-badge.component';

describe('PersonBadgeComponent', () => {
  let component: PersonBadgeComponent;
  let fixture: ComponentFixture<PersonBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
