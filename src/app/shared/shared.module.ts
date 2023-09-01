import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MaterialModule } from 'app/shared/modules/material.module';
import {ToastrModule} from "ngx-toastr";
//import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
//import { AuthGuard } from 'src/app/shared/guards/auth.guard';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
      //  AuthGuard,
        //MaterialModule,
        ToastrModule.forRoot(),
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        //MaterialModule
    ]
})
export class SharedModule
{
}
