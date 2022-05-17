import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditqualityComponent } from './creditquality/creditquality.component';
import { RatingpercentageComponent } from './ratingpercentage/ratingpercentage.component';
import { InvestmentyieldadminComponent } from './investmentyieldadmin/investmentyieldadmin.component';
import { IyadminheaderComponent } from './iyadminheader/iyadminheader.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { PopupModule } from "@progress/kendo-angular-popup";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { InputsModule } from '@progress/kendo-angular-inputs';

import { DialogModule } from "@progress/kendo-angular-dialog";
import { LabelModule } from "@progress/kendo-angular-label";
@NgModule({
  declarations: [
    InvestmentyieldadminComponent,
    IyadminheaderComponent,
    CreditqualityComponent,
    RatingpercentageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    PopupModule,
    ButtonsModule,
    DialogModule,
    LabelModule,
    InputsModule
  ],
  exports : [
    CreditqualityComponent
 ],
})
export class InvestmentyieldadminModule { }
