import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!: string; // This is inputted from the parent component which is the AppComponent
  @Input({ required: true }) avatar!: string; // This is inputted from the parent component which is the AppComponent
  @Input({ required: true }) name!: string; // This is inputted from the parent component which is the AppComponent
  @Output() select = new EventEmitter<string>(); // This is emitted to the parent component which is the AppComponent
  // select = output<string>(); // This is more modern way to define outputs, it is equivalent to the above line. 

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // This is the more modern way to define inputs.

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.id); // This emits the event to the parent component which is the AppComponent
  }
}
