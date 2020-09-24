import { async, ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';

import { SimpleListItemComponent } from './simple-list-item.component';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement, ElementRef } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe.only('SimpleListItemComponent', () => {
  let component: SimpleListItemComponent;
  let fixture: ComponentFixture<SimpleListItemComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule.withRoutes([]), NoopAnimationsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SimpleListItemComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        component.item = {
          name: '',
        };
        component.inputElement = new ElementRef(null);
        fixture.autoDetectChanges(true);
        fixture.detectChanges();
      })
      .catch((err) => {
        console.error('err:', err);
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should throw Save event', fakeAsync(() => {
    component.inputElement = new ElementRef({ focus: () => {} });

    const buttons = fixture.nativeElement.querySelectorAll('.simple-list-item__item-icons');
    expect(buttons.length).toEqual(1);

    const firstButton = buttons[0].querySelectorAll('button')[0];

    expect(firstButton.textContent).toContain('edit');
    expect(firstButton.textContent).not.toContain('save');
    expect(component.editModes).toBeFalsy();

    component.edit();
    fixture.componentInstance.cdRef.markForCheck();
    fixture.detectChanges();
    flush();

    const firstButton1 = fixture.nativeElement
      .querySelector('.simple-list-item__item-icons')
      .querySelectorAll('button')[0];

    expect(component.editModes).toBeTruthy();
    expect(firstButton1.textContent).not.toContain('edit');
    expect(firstButton1.textContent).toContain('save');
  }));
});
