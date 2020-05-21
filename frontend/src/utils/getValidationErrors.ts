import { ValidationError } from 'yup';

interface Errors {
    [Key: string]: string;
}

export default function getValidationErrors(err: ValidationError) {
    const ValidationError: Errors = {};

    err.inner.forEach((error) => {
        ValidationError[error.path] = error.message;
    });

    return ValidationError;
}
