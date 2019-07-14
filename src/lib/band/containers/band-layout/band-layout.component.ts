import { Component } from '@angular/core';
import { Band } from 'src/lib/models/band.model';
import { NgForm } from '@angular/forms';
import { BandsService } from '../../../services/bands.service';

@Component({
  selector: 'app-band-layout',
  templateUrl: './band-layout.component.html',
  styleUrls: ['./band-layout.component.scss']
})
export class BandLayoutComponent {
  constructor(private bandsService: BandsService) {
    // this.bandsService.readBands().subscribe(data => {
    //   const bands = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     } as Band;
    //   });
    //   console.log(bands);
    // });
  }
  band: Band = { name: '', country: '', status: true };

  save(form: NgForm) {
    this.bandsService
      .createBand(this.band)
      .then((id: string) => (this.band.id = id));
  }

  setBandStatus() {
    this.band.status = !this.band.status;
  }
}
