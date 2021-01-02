import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
export interface devices {
  id:number;
  name:string;
  attributes:{};
  uniqueId:string;
}


@Injectable({
  providedIn: 'root'
})
export class ContactService {
 
  constructor(private http:HttpClient) { 

  }
  authenticate():Observable<devices[]> {
    const headers = new HttpHeaders( {
      authorization: 'Basic ' + btoa("8376857964" + ':' + "8376857964")
    });

    return this.http.get(' https://webtest.onelap.in/api/devices', { headers: headers }).pipe(
      map((data:devices[])=>{
        return data.map(
          (datum:devices)=>{
            return {
              id: datum.id,
              name:datum.name,
              attributes:datum.attributes,
              uniqueId:datum.uniqueId
            }
          }
        )
      }),catchError(this.handleError)
    );

  }

  update(val){
    const headers = new HttpHeaders( {
      authorization: 'Basic ' + btoa("8376857964" + ':' + "8376857964")
    });
    return this.http.put("https://webtest.onelap.in/api/devices",val,{headers:headers}).pipe(catchError(this.handleError));
  }

  handleError(errorResponse:HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.log("Client Side Error: "+errorResponse.error.message);
    }else{
      console.log("Server Side Error: "+errorResponse);
    }
    return ErrorObservable.create("There is a problem and we are trying to resolve. Please try again later");
  }

}
