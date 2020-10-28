import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormShowError } from './components/formValidate/formShowErrors.component';
import { MaterialModule } from './material-module';

const compponents = [
  HeaderComponent,
  FooterComponent,
  FormShowError
]

@NgModule({
  declarations: [compponents],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [compponents]
})
export class DlsModule { }
