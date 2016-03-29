export declare class ValidationService {
    static getValidatorErrorMessage(code: string): any;
    static creditCardValidator(control: any): {
        'invalidCreditCard': boolean;
    };
    static emailValidator(control: any): {
        'invalidEmailAddress': boolean;
    };
    static passwordValidator(control: any): {
        'invalidPassword': boolean;
    };
    static zipCodeValidator(control: any): {
        'invalidZipcode': boolean;
    };
    static nameValidator(control: any): {
        'invalidName': boolean;
    };
    static phoneNumberValidator(control: any): {
        'invalidNumber': boolean;
    };
}
