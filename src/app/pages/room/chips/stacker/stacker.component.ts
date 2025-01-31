import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { stackChips } from 'src/app/utils/helpers/util';

@Component({
  selector: 'app-stacker',
  templateUrl: './stacker.component.html',
  styleUrls: ['./stacker.component.scss'],
  standalone: false,
})
export class StackerComponent implements OnInit, OnChanges {
  @Input() valor: number;
  chipsStacked: string[];

  constructor() {}

  ngOnInit() {
    this.recalcChips();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.recalcChips();
  }

  recalcChips() {
    this.chipsStacked = stackChips(this.valor);
  }
}
