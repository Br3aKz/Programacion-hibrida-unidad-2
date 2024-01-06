import { Injectable } from '@angular/core';
import { Preferences } from '@ionic-native/preferences/ngx';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  private keyDeleteQuotesOnStart = 'deleteQuotesOnStart';

  constructor(private preferences: Preferences) {}

  getDeleteQuotesOnStart(): Promise<boolean> {
    return this.preferences.fetch(this.keyDeleteQuotesOnStart) as Promise<boolean>;
  }

  setDeleteQuotesOnStart(value: boolean): Promise<void> {
    return this.preferences.store(this.keyDeleteQuotesOnStart, value);
  }
}