import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule, MatRadioModule,
    MatSelectModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatRippleModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
} from '@angular/material';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ListLoaderComponent } from './components/list-loader/list-loader.component';
import { ActionModalComponent } from './components/action-modal/action-modal.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { BookingListTabComponent } from './components/booking-list-tab/booking-list-tab.component';
import { BookingListExpandableTabComponent } from './components/booking-list-expandable-tab/booking-list-expandable-tab.component';
import { BookingListExpandableTabEntryComponent } from './components/booking-list-expandable-tab/booking-list-expandable-tab-entry.component';
import { ConferenceFormComponent } from '@app/booking/components/conference/components/conference-form/conference-form.component';
import { BookingFormComponent } from '@app/booking/components/booking-form/booking-form.component';
import { HasPermissionDirective } from './directives/has-permission.directive';


const angularMaterialModules = [
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    MatSortModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSidenavModule,
    MatRippleModule,
    MatListModule,
    MatProgressButtonsModule,
    MatCardModule,
    MatDialogModule
];

@NgModule({
    declarations: [
        FooterComponent,
        LoaderComponent,
        ListLoaderComponent,
        ActionModalComponent,
        DialogComponent,
        PageTitleComponent,
        BookingListTabComponent,
        BookingListExpandableTabComponent,
        BookingListExpandableTabEntryComponent,
        BookingFormComponent,
        ConferenceFormComponent,
        HasPermissionDirective
    ],
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        angularMaterialModules,
        FlexLayoutModule
    ],
    providers: [
    ],
    exports: [
        RouterModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        angularMaterialModules,
        FlexLayoutModule,
        FooterComponent,
        LoaderComponent,
        ListLoaderComponent,
        ActionModalComponent,
        PageTitleComponent,
        BookingListTabComponent,
        BookingListExpandableTabComponent,
        BookingListExpandableTabEntryComponent,
        BookingFormComponent,
        ConferenceFormComponent,
        HasPermissionDirective
    ],
    entryComponents: [
        DialogComponent,
        ActionModalComponent,
        BookingFormComponent,
        ConferenceFormComponent
    ]
})
export class SharedAppModule {
}
