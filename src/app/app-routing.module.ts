import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StreamingCaptureComponent } from './streaming-capture/streaming-capture.component';
import { AppDevelopComponent } from './app-develop/app-develop.component';
import { TdDesignComponent } from './td-design/td-design.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { QrCodeComponent } from
'./qr-code/qr-code.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'streamingcapture',
    component: StreamingCaptureComponent
  },
  {
    path: 'app-develop',
    component: AppDevelopComponent
  },
  {
    path: 'td-design',
    component: TdDesignComponent
  },
  {
    path: 'web-design',
    component: WebDesignComponent
  },
  {
    path: 'qr-code',
    component: QrCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
