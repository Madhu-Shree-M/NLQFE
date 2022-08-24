import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mobile } from '../models/mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private _httpClient: HttpClient) { }
  private _baseUrl = 'http://localhost:8085/nlq/';

  getByCustomQuery=(text:string):Observable<Mobile[]>=>{
    return this._httpClient.get<Mobile[]>(this._baseUrl + `search/${text}`);
  }
}
