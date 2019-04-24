import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('fadeIn', [

      state('void', style({ opacity: 0 })),
      
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0 }),
        animate(2000, style({ backgroundColor: 'white', opacity: 1}))
      ])
    ]),
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000, style({ opacity: 0}))
      ])   
    ]),
    trigger('stretch', [
      state('normal', style({ width: '100px'})),
      state('stretched', style ({ width: '200px'})),
      transition('* => *', animate('5000ms')),
    ])
  ] 
})
export class AppComponent {
  buttonState = 'normal'

}
