import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from './shared.module';

describe('SharedPage', () => {
  let component: SharedModule;
  let fixture: ComponentFixture<SharedModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SharedModule],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SharedModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
