import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeetinglistPage } from './meetinglist.page';

describe('MeetinglistPage', () => {
  let component: MeetinglistPage;
  let fixture: ComponentFixture<MeetinglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetinglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeetinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
