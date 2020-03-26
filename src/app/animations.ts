import {
    animate,
    state,
    style,
    transition,
    trigger,
    query,
    stagger
  } from '@angular/animations';
  
  export function fade(settings?: {
    name?: string;
    speed?: string;
    delay?: string;
    curve?: string;
  }) {
    settings = settings || {};
    return trigger(settings.name || 'fadeIn', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(
          `${settings.speed || '0.4s'} ${settings.delay || ''} ${settings.curve ||
            'ease-in'}`
        )
      ])
    ]);
  }
  
  export const fadeIn = trigger('fadeIn', [
    state('in', style({ opacity: 1 })),
    transition('void => *', [style({ opacity: 0 }), animate('0.4s  ease-in')])
  ]);
  
  export function fadeInOut(name?, speed?, delay?, incurve?, outcurve?) {
    return trigger(name || 'fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(`${speed || '1s'} ${delay || ''} ${incurve || ''}`)
      ]),
      transition('* => void', [
        style({ opacity: 1 }),
        animate(
          `${speed || '1s'} ${delay || ''} ${outcurve || ''}`,
          style({
            opacity: 0
          })
        )
      ])
    ]);
  }
  
  export function slideIn(name?, speed?, delay?, curve?) {
    return trigger(name || 'slideIn', [
      state('in', style({ transform: 'translateX(-100%)' })),
      transition('void => *', [
        style({ transform: 'translateX(0)' }),
        animate(`${speed || '1s'} ${delay || ''} ${curve || ''}`)
      ])
    ]);
  }
  
  export function slideOut(name?, speed?, delay?, curve?) {
    return trigger(name || 'slideOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('* => void', [
        style({ transform: 'translateX(-100%)' }),
        animate(`${speed || '1s'} ${delay || ''} ${curve || ''}`)
      ])
    ]);
  }
  export function stagr() {
    return trigger('staggerIn', [
      transition('* => *', [
        query(
          ':enter',
          style({ opacity: 0, transform: `translate3d(0,10px,0)` }),
          { optional: true }
        ),
        query(
          ':enter',
          stagger('100ms', [
            animate(
              '300ms',
              style({ opacity: 1, transform: `translate3d(0,0,0)` })
            )
          ]),
          { optional: true }
        )
      ])
    ]);
  }
  
  export const staggerIn = trigger('staggerIn', [
    transition('* => *', [
      query(':enter', style({ opacity: 0, transform: `translate3d(0,10px,0)` }), {
        optional: true
      }),
      query(
        ':enter',
        stagger('100ms', [
          animate('300ms', style({ opacity: 1, transform: `translate3d(0,0,0)` }))
        ]),
        { optional: true }
      )
    ])
  ]);
  
  export function flyInOut() {
    return trigger('flyInOut', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate(
          '0.2s 0.1s ease-out',
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          })
        )
      ])
    ]);
  }
  export function flyInOutReverse() {
    return trigger('flyInOutReverse', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate(
          '0.2s 0.1s ease-out',
          style({
            opacity: 0,
            transform: 'translateX(100%)'
          })
        )
      ])
    ]);
  }
  
  export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
      query(':enter', [style({ opacity: 0 })], { optional: true }),
  
      query(':leave', [style({ opacity: 0 })], { optional: true }),
  
      query(
        ':enter',
        [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))],
        { optional: true }
      )
    ])
  ]);
  
  export const popIn = trigger('popIn', [
    transition(':enter', [
      style({ transform: 'scale(0.5)', opacity: 0 }), // initial
      animate(
        '0.2s cubic-bezier(.8, -0.6, 0.2, 1.5)',
        style({ transform: 'scale(1)', opacity: 1 })
      ) // final
    ])
  ]);
  
  export const flipX = trigger('flipX', [
    transition(':enter', [
      style({ transform: 'rotateX(-90deg)', opacity: 0 }), // initial
      animate(
        '0.8s cubic-bezier(.8, -0.6, 0.2, 1.5)',
        style({ transform: 'rotateX(0deg)', opacity: 1 })
      ) // final
    ])
  ]);