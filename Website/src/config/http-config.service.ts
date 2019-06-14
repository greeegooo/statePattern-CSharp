import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigService {

  public url: string;

  constructor() {
    this.url = environment.webApiUrl;
  }
}
