import { Component, OnInit } from '@angular/core';
import { Band } from 'src/lib/models/band.model';
import { BandsService } from '../../../services/bands.service';

import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-band-layout',
  templateUrl: './band-layout.component.html',
  styleUrls: ['./band-layout.component.scss']
})
export class BandLayoutComponent implements OnInit {
  band: Band = { name: '', country: '', status: true };
  id: string;
  constructor(
    private bandsService: BandsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id !== 'new') {
      this.bandsService.readBand(this.id).subscribe(data => {
        this.band = {
          id: data.payload.id,
          ...data.payload.data()
        } as Band;
      });
    }
  }

  save() {
    let request: Promise<any>;

    Swal.fire({
      title: 'saving...',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    if (this.band.id) {
      request = this.bandsService.updateBand(this.band);
    } else {
      request = this.bandsService.createBand(this.band);
    }

    request.then((data: any) => {
      this.band.id = data ? data : this.band.id;

      Swal.fire({
        title: this.band.name,
        text: 'data saved',
        type: 'success'
      });
    });
  }

  setBandStatus() {
    this.band.status = !this.band.status;
  }
}
