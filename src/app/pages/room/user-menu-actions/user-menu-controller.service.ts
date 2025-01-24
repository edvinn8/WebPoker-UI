import { Injectable, EventEmitter } from '@angular/core';
import { UserOpenEventData } from './UserOpenEventData';

@Injectable({
  providedIn: 'root'
})
export class UserMenuControllerService {

  private userMenuEvent: EventEmitter<UserOpenEventData> = new EventEmitter<UserOpenEventData>();

  constructor() { }

  public show(x: number, y: number, uid: number) {
    this.userMenuEvent.emit(new UserOpenEventData(x, y, uid));
  }

  public hide() {
    this.userMenuEvent.emit(null);
  }

  public getUME(): EventEmitter<UserOpenEventData> {
    return this.userMenuEvent;
  }
}
