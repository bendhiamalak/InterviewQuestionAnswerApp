import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/language.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  apiEndPoint:string="https://freeapi.gerasim.in/api/interview/"
  constructor( private http:HttpClient) { }

  getAllLanguage():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(this.apiEndPoint+"GetAllLanguage")
  }

  getTopicBYLanId(langId:number):Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(this.apiEndPoint+"GetLanguageTopicBy?id="+langId)
  }
}
