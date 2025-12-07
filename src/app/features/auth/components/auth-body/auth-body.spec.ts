import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBody } from './auth-body';

describe('AuthBody', () => {
  let component: AuthBody;
  let fixture: ComponentFixture<AuthBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
