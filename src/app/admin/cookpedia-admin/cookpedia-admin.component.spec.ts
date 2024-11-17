import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookpediaAdminComponent } from './cookpedia-admin.component';

describe('CookpediaAdminComponent', () => {
  let component: CookpediaAdminComponent;
  let fixture: ComponentFixture<CookpediaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookpediaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookpediaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
