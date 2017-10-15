import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponentComponent } from './hello-world-component.component';

describe('HelloWorldComponentComponent', () => {
  let component: HelloWorldComponentComponent;
  let fixture: ComponentFixture<HelloWorldComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});