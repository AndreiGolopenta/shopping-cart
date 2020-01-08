import {
  trigger,
  transition,
  style,
  animate,
  state
} from '@angular/animations';

export const upDown = trigger('up&down', [
  state(
    'initial',
    style({
      top: 0
    })
  ),
  state(
    'final',
    style({
      top: '-30px'
    })
  ),
  transition('initial <=> final', [animate('200ms ease-in-out')])
]);

export const leftRight = trigger('left&right', [
  state(
    'initial',
    style({
      transform: 'translateX(0)'
    })
  ),
  state(
    'final',
    style({
      transform: 'translateX(-40px)'
    })
  ),
  transition('initial <=> final', [animate('200ms ease-in-out')])
]);

export const scale = trigger('cardScale', [
  state(
    'initial',
    style({
      transform: 'scale(1)'
    })
  ),
  state(
    'final',
    style({
      transform: 'scale(1.04)'
    })
  ),
  transition('initial <=> final', [animate('150ms ease-in-out')])
]);
