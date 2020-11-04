import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormShowError } from './components/formValidate/formShowErrors.component';
import { MaterialModule } from './material-module';
import { MoneyFormatPipe } from './pipes/moneyFormat.pipe';
import { LoaderComponent } from './components/loader/loader.component';

const compponents = [
  HeaderComponent,
  FooterComponent,
  FormShowError,
  LoaderComponent
]

@NgModule({
  declarations: [compponents,
    MoneyFormatPipe],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [compponents,
    MoneyFormatPipe]
})
export class DlsModule { }
