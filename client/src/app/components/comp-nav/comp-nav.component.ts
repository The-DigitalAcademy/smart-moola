import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comp-nav',
  templateUrl: './comp-nav.component.html',
  styleUrls: ['./comp-nav.component.css']
})
export class CompNavComponent {
  @Input()
  className!: string;
  @Input()
  statusBarLightClassName!: string;
  @Input() battery: string = 'battery.png';
  @Input() wifi: string = 'wifi.svg';
  @Input() mobileSignal: string = 'mobile-signal.svg';
  @Input() time: string = 'time.svg';
}
