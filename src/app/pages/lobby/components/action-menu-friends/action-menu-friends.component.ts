import { Component, OnInit } from '@angular/core';
import { ActionMenuFriendsService } from './action-menu-friends.service';
import { Room, RoomResponse } from 'src/app/services/roomsResponse';
import { LobbyService } from 'src/app/services/lobby.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-action-menu-friends',
    templateUrl: './action-menu-friends.component.html',
    styleUrls: ['./action-menu-friends.component.scss'],
    standalone: false
})
export class ActionMenuFriendsComponent implements OnInit {

  public isShowing: boolean;
  public x: number;
  public y: number;
  public rooms: Room[];

  constructor(private amfs: ActionMenuFriendsService, private lobbySrv: LobbyService, private router: Router) { }

  ngOnInit() {
    this.amfs.getfME().subscribe(s => {
      if (!!s) {
        this.isShowing = true;
        this.x = s.x + 15;
        this.y = s.y + 15;
        this.rooms = s.rooms;
      }
    });
  }


  spectate(room: Room) {
    this.connect(this.lobbySrv.getRoomInfo(room.id_room));
  }

  connect(room: RoomResponse) {
    console.log(room);
    localStorage.setItem('room-' + room.id_room, JSON.stringify(room));
    this.router.navigate(['/room', room.id_room]);
    // window.open('/#/room/' + room.id_room, '_blank');
  }

}
