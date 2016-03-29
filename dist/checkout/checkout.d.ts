import { FormBuilder, Control, ControlGroup } from 'angular2/common';
import { Router } from 'angular2/router';
export declare class Checkout {
    private builder;
    _router: Router;
    form: ControlGroup;
    firstName: Control;
    lastName: Control;
    streetAddress: Control;
    zipCode: Control;
    state: Control;
    city: Control;
    email: Control;
    phone: Control;
    constructor(builder: FormBuilder, _router: Router);
}
