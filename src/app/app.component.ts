import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public arr : any = []

  public ms: any = '0' + 0;
  public sec: any = '0' + 0;
  public min: any = '0' + 0;
  public hr: any = '0' + 0;

  public startTimer!: NodeJS.Timer;
  public running: boolean = false;

  public start(): void {
    if(!this.running){
      this.running = true;
      this.startTimer = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if(this.ms === 100){
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms = '0' + 0;
        }

        if(this.sec === 60){
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }

        if(this.min === 60){
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0' + 0
        }

        if(this.hr === 24){
          this.hr = '0' + 0
        }

      }, 10)
    } else {
      this.stop();
    }
  }

  public stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  public lap() : void {
    if(this.running){
      this.arr.push({id: this.arr.length+1, time: `${this.hr}:${this.min}:${this.sec}:${this.ms}`})
    }

  }

  public reset(): void {
    clearInterval(this.startTimer);
    this.running = false;
    this.hr = this.min = this.sec = this.ms = '0' + 0;
    this.arr.length = 0;
  }

}
