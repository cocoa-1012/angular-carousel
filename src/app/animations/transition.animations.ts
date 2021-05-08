import {
    trigger,
    transition,
    animate,
    style,
    state,
    keyframes
} from '@angular/animations';

export const bgwsContentHeightTrigger = trigger('contentHeightAnimation',[
        //   todo: disable animation on initial fetch from database.
        transition(
            ':enter',
            [
                style({
                    height: 0,
                    opacity: 0
                }),
                animate('225ms cubic-bezier(0.4, 0, 0.2, 1)',
                    style({
                        height: '*',
                        opacity: 1
                    }))
            ]
        ),
        transition(
            ':leave',
            [
                style({
                    height: '*',
                    opacity: 1
                }),
                animate('225ms cubic-bezier(0.4, 0, 0.2, 1)',
                    style({
                        height: 0,
                        opacity: 0
                    }))
            ]
        )
    ]
);

export const bgwsContentHeightTrigger400 = trigger('contentHeightAnimation400',[
        //   todo: disable animation on initial fetch from database.
        transition(
            ':enter',
            [
                style({
                    height: 0,
                    opacity: 0
                }),
                animate('400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    style({
                        height: '*',
                        opacity: 1
                    }))
            ]
        ),
        transition(
            ':leave',
            [
                style({
                    height: '*',
                    opacity: 1
                }),
                animate('400ms cubic-bezier(0.4, 0, 0.2, 1)',
                    style({
                        height: 0,
                        opacity: 0
                    }))
            ]
        )
    ]
);