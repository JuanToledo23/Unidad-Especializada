import { EnvCoreService } from '../env.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(
    private env: EnvCoreService,
    private http: HttpClient ) { }

  getClarificationDetail(clarificationId: number) {
    return this.http.get(`${this.env.getProperties().CORE}getClarificationDetail/${clarificationId}`);
  }

}
