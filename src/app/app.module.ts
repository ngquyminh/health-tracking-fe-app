import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import {
  MatCheckboxModule,
  MatCheckboxDefaultOptions,
  MAT_CHECKBOX_DEFAULT_OPTIONS,
} from '@angular/material/checkbox';
import {
  MAT_RADIO_DEFAULT_OPTIONS,
  MatRadioModule,
} from '@angular/material/radio';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { CodeInputModule } from 'angular-code-input';
import { GraphQLModule } from './apollo';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputCTComponent } from './components/inputs/input-ct/input-ct.component';
import { InputTitleComponent } from './components/inputs/input-title/input-title.component';
import { TestModalComponent } from './components/modal/test-modal/test-modal.component';
import { HomeBodyComponent } from './components/pages/home/home-body/home-body.component';
import { HomeFooterComponent } from './components/pages/home/home-footer/home-footer.component';
import { HomeHeaderComponent } from './components/pages/home/home-header/home-header.component';
import { FoodTableComponent } from './components/tables/food-table/food-table.component';
import { ActivityCardComponent } from './components/ui/activity-card/activity-card.component';
import { BmiCardComponent } from './components/ui/bmi-card/bmi-card.component';
import { CarouselCtComponent } from './components/ui/carousel-ct/carousel-ct.component';
import { ImageUploadComponent } from './components/ui/image-upload/image-upload.component';
import { InnerFooterComponent } from './components/ui/inner-footer/inner-footer.component';
import { InnerHeaderComponent } from './components/ui/inner-header/inner-header.component';
import { StatisticRecordCardComponent } from './components/ui/statistic-record-card/statistic-record-card.component';
import { StepCardComponent } from './components/ui/step-card/step-card.component';
import { ImageDragDirective } from './directives/image-drag.directive';
import { ChartComponent } from './pages/chart/chart.component';
import { HomeComponent } from './pages/home/home.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { reducers } from './reducers';
import { MaterialItemComponent } from './components/modal/test-modal/material-number/material-item.component';
import { LevelItemComponent } from './components/modal/test-modal/level-item/level-item.component';
import { DataVisualizationComponent } from './components/data-visualization/data-visualization.component';
import { ChartsModule } from 'ng2-charts';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ModalComponent } from './components/modal/modal.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerInterceptorService } from './services/spinner-interceptor/spinner-interceptor.service';
import { DataPercentageComponent } from './components/data-percentage/data-percentage.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodTableComponent,
    InputCTComponent,
    InputTitleComponent,
    LoginComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeBodyComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    InnerHeaderComponent,
    InnerFooterComponent,
    CarouselCtComponent,
    ImageUploadComponent,
    ImageDragDirective,
    HomeComponent,
    StatisticRecordCardComponent,
    StepCardComponent,
    BmiCardComponent,
    ActivityCardComponent,
    ChartComponent,
    TestModalComponent,
    MaterialItemComponent,
    LevelItemComponent,
    DataVisualizationComponent,
    EditPageComponent,
    UserDetailComponent,
    ModalComponent,
    SpinnerComponent,
    DataPercentageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CodeInputModule,
    NgbModule,
    NgbPaginationModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    GraphQLModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    StoreModule.forRoot(reducers),
    ChartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    {
      provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
      useValue: {
        clickAction: 'check-indeterminate',
      } as MatCheckboxDefaultOptions,
    },
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true,
    },
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
