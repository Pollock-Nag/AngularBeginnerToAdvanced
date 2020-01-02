import { trigger, transition, state, style, animate } from '@angular/animations';

export let fade = trigger('fade', [

  state('void', style({ opacity: 0 })),

  transition('void <=> *', [
    animate(1500)
  ])
]);
