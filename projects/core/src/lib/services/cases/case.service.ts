import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EnvCoreService } from '../env.service';

export interface Catalogue {
  catalogueElement: CatalogueElement[];
  catalogues: null;
  endpoint: string;
  fieldId: number;
  fieldName: string;
  label: string;
}

export interface CatalogueElement {
  key: number;
  value: string;
  generateGroup: string;
}

export interface CaseCatalogues {
  business?: any;
}

@Injectable({
  providedIn: 'root'
})
export class CaseService {

  private catalogues: Subject<CaseCatalogues>;

  public catalogues$: Observable<CaseCatalogues>;

  constructor(
    private env: EnvCoreService,
    private http: HttpClient) {
    this.catalogues = new Subject<CaseCatalogues>();
    this.catalogues$ = this.catalogues.asObservable();
  }

  gatCase(caseId: number): Observable<any> {
    return this.http.get(`${this.env.getProperties().CORE}getCase/${caseId}`);
  }

  getCatalogues(body: any): Observable<any> {
    return this.http.post(`${this.env.getProperties().CORE}getCatalogue`, body);
  }

  getCases(): Observable<any>{
    return this.http.get(`${this.env.getProperties().CORE}getCasesByAnalyst`);
  }

  getCaseToRegistry(): Observable<any> {
    return this.http.get(`${this.env.getProperties().CORE}registryController`);
  }

  getClientInformation(body: any): Observable<any> {
    return this.http.post(`${this.env.getProperties().CORE}getClientInformation`, body);
  }

  updateCase(body: any): Observable<any> {
    return this.http.post(`${this.env.getProperties().CORE}updateCase`, body);
  }
}
