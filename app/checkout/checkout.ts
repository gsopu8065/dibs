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

/*// An example of typical model
class Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}*/

@Component({
    selector: 'checkout',
    templateUrl: 'app/checkout/checkout.html',
    styleUrls: ['app/checkout/checkout.css'],
    directives: [FORM_DIRECTIVES]
})

export class Checkout {
    form: ControlGroup;

    firstName: Control;

    constructor(@Inject(FormBuilder) private builder: FormBuilder) {

        this.firstName = new Control("", Validators.compose([Validators.required]));

        this.form = builder.group({
            firstName:  this.firstName
        });
    }

    submitData(){
        console.log(JSON.stringify(this.form.value))
    }
}

