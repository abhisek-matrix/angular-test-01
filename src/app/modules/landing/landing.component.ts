import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'landing',
    templateUrl    : './landing.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent
{
    /**
     * Constructor
     */
    constructor()
    {}
}
