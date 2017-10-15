import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDemoComponent } from './directives-demo.component';

describe('DirectivesDemoComponent', () => {
  let component: DirectivesDemoComponent;
  let fixture: ComponentFixture<DirectivesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});