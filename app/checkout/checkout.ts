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
    selector: 'checkout',
    templateUrl: 'app/checkout/checkout.html',
    styleUrls: ['app/checkout/checkout.css'],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES, CORE_DIRECTIVES, ControlMessages]
})

export class Checkout {
    form: ControlGroup;

    firstName: Control;
    lastName: Control;
    streetAddress: Control;
    zipCode: Control;
    state: Control;
    city: Control;
    email: Control;
    phone: Control;

    constructor(@Inject(FormBuilder) private builder: FormBuilder,
                @Inject(Router) public _router:Router) {

        this.firstName = new Control("", Validators.compose([Validators.required, ValidationService.nameValidator]));
        this.lastName = new Control("", Validators.compose([Validators.required, ValidationService.nameValidator]));
        this.streetAddress = new Control("", Validators.compose([Validators.required]));
        this.zipCode = new Control("", Validators.compose([Validators.required, ValidationService.zipCodeValidator]));
        this.state = new Control("", Validators.compose([Validators.required]));
        this.city = new Control("", Validators.compose([Validators.required]));
        this.email = new Control("", Validators.compose([Validators.required, ValidationService.emailValidator]));
        this.phone = new Control("", Validators.compose([ ValidationService.phoneNumberValidator]));

        this.form = builder.group({
            firstName:  this.firstName,
            lastName: this.lastName,
            streetAddress: this.streetAddress,
            zipCode: this.zipCode,
            city: this.city,
            state: this.state,
            email: this.email,
            phone: this.phone
        });
    }
}

