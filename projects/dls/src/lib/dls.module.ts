import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormShowError } from './components/formValidate/formShowErrors.component';
import { MaterialModule } from './material-module';
import { MoneyFormatPipe } from './pipes/moneyFormat.pipe';
import { TimerComponent } from './components/timer/timer.component';
import { TimerFormatPipe } from './pipes/timer/timer-format.pipe';

const compponents = [
  HeaderComponent,
  FooterComponent,
  TimerComponent,
  FormShowError
]

@NgModule({
  declarations: [compponents,
    MoneyFormatPipe,
    TimerFormatPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [compponents,
    MoneyFormatPipe]
})
export class DlsModule { }
