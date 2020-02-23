import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meetinglist',
  templateUrl: './meetinglist.page.html',
  styleUrls: ['./meetinglist.page.scss'],
})
export class MeetinglistPage implements OnInit {
  id: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id', this.id);
  }

}
