import { Component, OnInit } from '@angular/core';
import { BandsService } from 'src/lib/services/bands.service';
import { Band } from 'src/lib/models/band.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bands-layout',
  templateUrl: './bands-layout.component.html',
  styleUrls: ['bands-layout.component.scss']
})
export class BandsLayoutComponent implements OnInit {
  bands: Band[];
  loading = true;

  constructor(private bandsService: BandsService) {}

  ngOnInit() {
    this.bandsService.readBands().subscribe(data => {
      this.loading = false;
      this.bands = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Band;
      });
    });
  }

  deleteBand(band: Band) {
    Swal.fire({
      title: 'delete?',
      text: `do you want to delete ${band.name}?`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(response =>
      response.value ? this.bandsService.deleteBand(band.id) : ''
    );
  }
}
