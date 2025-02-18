import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-connecting',
    templateUrl: './connecting.component.html',
    styleUrls: ['./connecting.component.scss'],
    standalone: false
})
export class ConnectingComponent implements OnInit {

  @Input() detail: string;

  constructor() { }

  ngOnInit() {
  }

}
