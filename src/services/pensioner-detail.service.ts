import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PensionerDetailService {

  pension_details_URL="http://localhost:8100/PensionerDetailByAadhaar"
  constructor(private http:HttpClient) { }
  PensionDetails(Get_url : string){
    var final_url=this.pension_details_URL+"/"+Get_url;
    return this.http.get(final_url);
  }
  
}
