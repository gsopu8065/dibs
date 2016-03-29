import { FormBuilder, Control, ControlGroup } from 'angular2/common';
export declare class Payment {
    private builder;
    form: ControlGroup;
    cardNumber: Control;
    expireMonth: Control;
    expireYear: Control;
    cvv: Control;
    constructor(builder: FormBuilder);
}
