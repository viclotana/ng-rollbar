import * as Rollbar from 'rollbar';
import {
  Injectable,
  Inject,
  InjectionToken,
  ErrorHandler
} from '@angular/core';

const rollbarConfig = {
  accessToken: '9db6370e5a924ddaac0cbd67fbf13632',
  captureUncaught: true,
  captureUnhandledRejections: true,
};

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  handleError(err:any) : void {
    this.rollbar.error(err.originalError || err);
    console.log('error occured here brooo');
  }
}

export function rollbarFactory() {
  return new Rollbar(rollbarConfig);
}