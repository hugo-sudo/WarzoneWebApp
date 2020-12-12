import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Injectable({
  providedIn: 'root'
})
export class CodapiService {

  constructor(private http: HttpClient) {}

  playerStats(gamertag:string,platform:string): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        "X-Rapidapi-Key": "c64a504901msh79f005ddf07642fp1a3ac5jsn8c0ddc7fab61",
        "X-Rapidapi-Host": "call-of-duty-modern-warfare.p.rapidapi.com",
      })
    }
    if(platform.localeCompare("battle") == 0) {
      var linkGamerTag = gamertag.replace("#","%2523");
      return this.http.get("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/"+linkGamerTag+"/battle",options);
    } else if (platform.localeCompare("psn") == 0) {
      return this.http.get("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/"+gamertag+"/psn",options);
    } else {
      return this.http.get("https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/"+gamertag+"/xb1",options);
    }
  }

  playerStatsWeek(gamertag:string,platform:string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "X-Rapidapi-Key": "c64a504901msh79f005ddf07642fp1a3ac5jsn8c0ddc7fab61",
        "X-Rapidapi-Host": "call-of-duty-modern-warfare.p.rapidapi.com",
      })
    }
      if(platform.localeCompare("battle") == 0) {
        var linkGamerTag = gamertag.replace("#","%2523");
        return this.http.get("https://call-of-duty-modern-warfare.p.rapidapi.com/weekly-stats/Slayerzeus%25232101/battle",options);
      } else if (platform.localeCompare("psn") == 0) {
        return this.http.get("https://call-of-duty-modern-warfare.p.rapidapi.com/weekly-stats/"+gamertag+"/psn",options);
      } else {
        return this.http.get("https://call-of-duty-modern-warfare.p.rapidapi.com/weekly-stats/"+gamertag+"/xb1",options);
      }
    }

}
