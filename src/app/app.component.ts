import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';
import { Transferencia } from './types/Transfer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bank123';

  constructor(private transferenciaService: TransferenciaService) {}
}
