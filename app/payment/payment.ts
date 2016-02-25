/**
 * Created by srujangopu on 2/9/16.
 */

import {bootstrap} from 'angular2/bootstrap'
import {Component, Inject} from 'angular2/core';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES,
    CORE_DIRECTIVES
} from 'angular2/common';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {ValidationService} from '../validations/ValidationService'
import {ControlMessages} from '../validations/ControlMessages'

@Component({
    selector: 'payment',
    templateUrl: 'app/payment/payment.html',
    styleUrls: ['app/payment/payment.css'],
    directives: [FORM_DIRECTIVES, ROUTER_DIRECTIVES, ControlMessages]
})

export class Payment {
    form: ControlGroup;

    cardNumber: Control;
    expireMonth: Control;
    expireYear: Control;
    cvv: Control;

    constructor(@Inject(FormBuilder) private builder: FormBuilder) {

        this.cardNumber = new Control("", Validators.compose([Validators.required]));
        this.expireMonth = new Control("", Validators.compose([Validators.required]));
        //this.expireYear = new Control("", Validators.compose([Validators.required]));
        this.cvv = new Control("", Validators.compose([Validators.required]));

        this.form = builder.group({
            cardNumber:  this.cardNumber,
            expireMonth: this.expireMonth,
            cvv: this.cvv

        });
    }
}

