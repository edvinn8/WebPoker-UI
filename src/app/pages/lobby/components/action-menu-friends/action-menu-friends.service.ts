import { Injectable, EventEmitter } from '@angular/core';
import { UserOpenEventData } from 'src/app/pages/room/user-menu-actions/UserOpenEventData';
import { FriendsRoomEventData } from './FriendsRoomEventData';
import { Room } from 'src/app/services/roomsResponse';

@Injectable({
  providedIn: 'root'
})
export class ActionMenuFriendsService {
  
  private userMenuEvent: EventEmitter<FriendsRoomEventData> = new EventEmitter<FriendsRoomEventData>();

  constructor() { }

  public show(x: number, y: number, rooms: Room[]) {
    this.userMenuEvent.emit(new FriendsRoomEventData(x, y, rooms));
  }

  public hide() {
    this.userMenuEvent.emit(null);
  }

  public getfME(): EventEmitter<FriendsRoomEventData> {
    return this.userMenuEvent;
  }
}

