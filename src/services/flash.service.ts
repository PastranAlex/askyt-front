import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { FlashComponent } from '../app/core/flash/flash.component';

@Injectable({
  providedIn: 'root'
})
export class FlashService {
  host;
  constructor(private cfr: ComponentFactoryResolver) {}

  emit(change: any) {
    this.showFlash(change);
  }

  showFlash(data) {
    const componentFactory = this.cfr.resolveComponentFactory(FlashComponent);
    this.host.clear();
    const componentRef = this.host.createComponent(componentFactory);
    (<FlashComponent>componentRef.instance)._message = data.message;
    (<FlashComponent>componentRef.instance)._type = data.type;
    (<FlashComponent>componentRef.instance)._ref = componentRef;
  }

  registerHost(host) {
    this.host = host;
  }
}
