import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { PagesModule } from '../pages.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreService } from '@core/services/core.service';
import { MatDialog } from '@angular/material/dialog';
import { UserEntityService } from '../../root-store/users-store/user-entity.service';
import { of } from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    const userEntityServiceMock = {
      getEntities: () => of([{ name: 'Name 1' }, { name: 'Name 2' }]),
      loaded$: () => of(true),
      loading$: () => of(false),
    };
    TestBed.configureTestingModule({
      imports: [PagesModule, NoopAnimationsModule],
      providers: [
        { provide: CoreService, useValue: {} },
        { provide: MatDialog, useValue: {} },
        { provide: UserEntityService, useValue: userEntityServiceMock },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
      .catch((err) => {
        console.error('err:', err);
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain `app-add-item` component', () => {
    const usersComponent: HTMLElement = fixture.nativeElement;
    const appAddItemComponent = usersComponent.querySelector('app-add-item');

    expect(appAddItemComponent).toBeTruthy();
  });

  it('should contain `app-simple-list` component', () => {
    const usersComponent: HTMLElement = fixture.nativeElement;
    const appSimpleListComponent = usersComponent.querySelector('app-simple-list');

    expect(appSimpleListComponent).toBeTruthy();
  });

  it('should contain `app-back-button` component', () => {
    const usersComponent: HTMLElement = fixture.nativeElement;
    const backButtonComponent = usersComponent.querySelector('app-back-button');

    expect(backButtonComponent).toBeTruthy();
  });

  it('should contain `Users` header', () => {
    const usersComponent: HTMLElement = fixture.nativeElement;
    const headerComponent = usersComponent.querySelector('mat-toolbar-row');

    expect(headerComponent.textContent).toContain('Users');
  });

  it('should contain 2 components of `app-simple-list-item`', () => {
    const usersComponent: HTMLElement = fixture.nativeElement;
    const appSimpleListComponents = usersComponent.querySelectorAll('app-simple-list-item');

    expect(appSimpleListComponents.length).toEqual(2);
  });
});
