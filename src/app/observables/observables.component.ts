import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit{
  ngOnInit(): void {
    this.myObservable.subscribe({
      next:(val) => console.log(val),
      error:(err) => console.log(err),
      complete:() => console.log('completed')
    })
  }
  myObservable = new Observable((observer) => {
    console.log('Observable Starts');

    setTimeout(() => observer.next(1),1000)
    setTimeout(() => observer.next(2),1000)
    setTimeout(() => observer.next(3),1000)
    setTimeout(() => observer.next(4),1000)
    observer.next(17)
    //observer.error('error generated');
  })
}
