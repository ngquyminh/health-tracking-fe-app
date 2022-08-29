import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestModalComponent } from 'src/app/components/modal/test-modal/test-modal.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor( private dialog: MatDialog) {
    let dialogRef = this.dialog.open(TestModalComponent, {
      width: '1162px',
      panelClass: "test-modal-wrapper",
      data:{

      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
   }

  ngOnInit(): void {
  }

  openDialog(){

  }

}
