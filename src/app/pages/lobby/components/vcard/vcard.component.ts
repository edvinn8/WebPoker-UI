import { Component, OnInit, Input } from '@angular/core';
import {
  Room,
  RoomResponse,
  RoomsResponse,
} from 'src/app/services/roomsResponse';
import { LobbyService } from 'src/app/services/lobby.service';
import { ActionMenuFriendsService } from '../action-menu-friends/action-menu-friends.service';

@Component({
  selector: 'app-vcard',
  templateUrl: './vcard.component.html',
  styleUrls: ['./vcard.component.scss'],
  standalone: false,
})
export class VcardComponent implements OnInit {
  @Input() status: string = '';
  @Input() spectateButton: boolean;
  @Input() statusColor;
  @Input() playedHours: number;
  @Input() nick: string;
  @Input() chips: number;
  @Input() loading: boolean;
  @Input() rooms: Room[];

  constructor(private amfs: ActionMenuFriendsService) {}

  ngOnInit() {
    console.log(this.rooms);
    this.playedHours = Math.ceil(Math.random() * 100);
    console.log('this.playedHours: ', this.playedHours);
    console.log('this.status: ', this.status);
  }

  spectate(evt) {
    if (this.rooms.length > 0) {
      this.amfs.show(evt.clientX, evt.clientY, this.rooms);
    }
  }
}
