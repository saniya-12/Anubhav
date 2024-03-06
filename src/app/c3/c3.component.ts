import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-c3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './c3.component.html',
  styleUrl: './c3.component.css'
})
export class C3Component {
    // title = 'Nyx';
    // firstName = 'John';
    // can be written as firstName:string = "John";
    // if we dont want to initialize then string|undefined
    // lastName = 'Doe';
  
  
    // Property Binding
    // title = 'Nyx Property Bindings'
    // isDisabled = true;

    // mybgColor = "#f34825"
    // mytColor = "#000000"
    // myColor = "#ffffff"

    // myCSSClass ="lightblue";

    // // Event Binding
    // // onSave = () => {
    // //   alert("Hello")
    // // }

    // // Event Binding (2)
    // // onSave = (event:MouseEvent) => {
    //                                             // onSave = (event:any) => {
    // //   alert("Button Clicked")
    // // }

    // // Event Binding (3)
    // // onSave(event:any) {
    // //   alert("Let's Save it! "+ event)
    // // }

    // onSave1(msg:string) {
    //   alert("Message: " + msg)
    // }

                                                        // TWO WAY BINDINGS
    // name = ''
    // clearName() {
    //   this.name = '';
    // }

    username = 'Anubhav'
    isChecked = true
}

