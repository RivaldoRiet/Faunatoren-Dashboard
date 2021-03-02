export interface ValidationError {
    code: number;
    errorDetails: [{
        errorMessage: string;
        exception: string;
    }];
    errorMessage:string;
}
