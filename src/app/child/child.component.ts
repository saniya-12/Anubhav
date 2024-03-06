import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() amount: number = 0
  @Output() amountChange : EventEmitter<number> = new EventEmitter<number>;

  @Input() spent: number = 0;
  @Output() spentChange : EventEmitter<number> = new EventEmitter<number>;

  withdraw(){
    this.amount -=100;
    this.spent +=100;
    this.amountChange.emit(this.amount);
    this.spentChange.emit(this.spent);
  }
}
