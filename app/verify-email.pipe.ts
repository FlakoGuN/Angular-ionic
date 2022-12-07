import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verifyEmail'
})
export class VerifyEmailPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
