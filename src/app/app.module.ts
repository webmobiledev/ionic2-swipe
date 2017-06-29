import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StackConfig, Stack, Card, ThrowEvent, DragEvent, SwingStackComponent, SwingCardComponent } from 'angular2-swing';
import { Home } from '../pages/home/home';
import { Contact } from '../pages/contact/contact';
import { About } from '../pages/about/about';
import { NotificationPage } from '../pages/notification/notification';
import { ModalPage } from '../pages/modal/modal';
import { AskPage } from '../pages/ask/ask';
import { AnswerPage } from '../pages/answer/answer';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'baa63012'
  }
};

@NgModule({
  declarations: [
    MyApp,
    Home,
    Contact,
    About,
    NotificationPage,
    ModalPage,
    AskPage,
    AnswerPage,
    SwingCardComponent,
    SwingStackComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      },
      backButtonText: '',
      // backButtonIcon: 'ios-arrow-back',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios'
    }),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Contact,
    About,
    NotificationPage,
    ModalPage,
    AskPage,
    AnswerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
