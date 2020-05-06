import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { RootState } from '@app/store/models/root-state.model';
import { ActionModalComponent } from '@app/shared/components/action-modal';
import { DialogService } from '@app/core/services/dialog-service/dialog.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { VcModel } from '@app/booking/models/conference-overview/conference-room-overview.model';

@Component({
  selector: 'app-vc-id-list-tab',
  templateUrl: './vc-id-list-tab.component.html',
  styleUrls: ['./vc-id-list-tab.component.scss']
})
export class VcIdListTabComponent implements OnInit {

  displayedColumns: string[] = ['roomName', 'roomId', 'roomAddedOn', 'createdBy'];
  @Input() public createdVc: VcModel[];
  public loader = true;
  public isDescendingByDate = true;
  public dataSource: MatTableDataSource<VcModel> = new MatTableDataSource(this.createdVc);

  constructor(
    public readonly store$: Store<RootState>,
    private readonly dialogService: DialogService
  ) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  public ngOnInit(): void {
    this.sortVcsAsPerDate();
    this.dataSource.paginator = this.paginator;
    setTimeout(() => this.loader = false, 200);
    this.dialogService.isRoomAdded.subscribe(res => {
      console.log(res);
      if (res && res.length !== 0) {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  public sortVcsAsPerDate(): any {
    this.isDescendingByDate
    ? this.createdVc.sort((a, b) => +new Date (b.roomAddedOn.toString()) - +new Date (a.roomAddedOn.toString()))
    : this.createdVc.sort((a, b) => +new Date (a.roomAddedOn.toString()) - +new Date (b.roomAddedOn.toString()));
    this.isDescendingByDate = !this.isDescendingByDate;
    this.dataSource = new MatTableDataSource(this.createdVc);
  }

}
