import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormShowErrorComponent } from './components/formValidate/formShowErrors.component';
import { MaterialModule } from './material-module';
import { MoneyFormatPipe } from './pipes/moneyFormat.pipe';
import { TimerComponent } from './components/timer/timer.component';
import { TimerFormatPipe } from './pipes/timer/timer-format.pipe';
import { LoaderComponent } from './components/loader/loader.component';

const components = [
  HeaderComponent,
  FooterComponent,
  TimerComponent,
  FormShowErrorComponent,
  LoaderComponent
];

@NgModule({
  declarations: [components,
    MoneyFormatPipe,
    TimerFormatPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  exports: [components,
    MoneyFormatPipe]
})
export class DlsModule { }
