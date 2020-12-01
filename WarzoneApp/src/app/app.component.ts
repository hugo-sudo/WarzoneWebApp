import { Component } from '@angular/core';
import { CodapiService } from './Api/codapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  public data:any = []
  public dataWeek:any = []
  constructor(private codapi: CodapiService) { }

  playerStats() {
    let gamerTag:string = (document.getElementById("gamerTag") as HTMLInputElement).value;
    let platform_chosen:string = (document.getElementById("platform_chosen") as HTMLInputElement).value;
    console.log(platform_chosen);
    console.log(gamerTag);
    if (platform_chosen.localeCompare("PlayStation")==0) {
      this.codapi.playerStats(gamerTag,"psn").subscribe((res) => {
        this.data = res;
        console.log('JSON Response = ', this.data); ;
      });
    } else  if (platform_chosen.localeCompare("Battle.net")==0) {
      this.codapi.playerStats(gamerTag,"battle").subscribe((res) => {
        this.data = res;
        console.log('JSON Response = ', JSON.stringify(this.data)); ;
      });
    } else if (platform_chosen.localeCompare("Xbox")==0){
      this.codapi.playerStats(gamerTag,"xb1").subscribe((res) => {
        this.data = res;
        console.log('JSON Response = ', JSON.stringify(this.data)); ;
      });
    }
    
  }

  playerStatsWeek() {
    let gamerTag:string = (document.getElementById("gamerTagWeek") as HTMLInputElement).value;
    let platform_chosen:string = (document.getElementById("platform_chosen") as HTMLInputElement).value;
    console.log(platform_chosen);
    console.log(gamerTag);
    if (platform_chosen.localeCompare("PlayStation")==0) {
      this.codapi.playerStatsWeek(gamerTag,"psn").subscribe((res) => {
        this.dataWeek = res;
        console.log('JSON Response Week= ', this.dataWeek); ;
      });
    } else if (platform_chosen.localeCompare("Battle.net")==0) {
      this.codapi.playerStatsWeek(gamerTag,"battle").subscribe((res) => {
        this.dataWeek = JSON.parse(res);
        console.log('JSON Response Week= ', JSON.parse(this.dataWeek)); ;
      });
    } else if (platform_chosen.localeCompare("Xbox")==0){
      this.codapi.playerStatsWeek(gamerTag,"xb1").subscribe((res) => {
        this.dataWeek = res;
        console.log('JSON Response Week= ', JSON.stringify(this.dataWeek)); ;
      });
    }
  }
}
