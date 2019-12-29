import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    alert('An unexpected error ocurred.');
    console.log('An unexpected error ocurred: ', error);
  }
}
