import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'auth',
    templateUrl    : './auth.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent
{
    /**
     * Constructor
     */
    constructor()
    {}
}
