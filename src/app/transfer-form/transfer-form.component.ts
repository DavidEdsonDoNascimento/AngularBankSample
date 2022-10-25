import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
})
export class TransferFormComponent {
  title = 'Bank123';
  valor: number = 0;
  destino: number = 0;

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router
  ) {}

  transferir() {
    console.log('Solicitada nova transferencia...');
    console.log(
      `Transferencia efetuada para conta (${this.destino}), no valor de R$ ${this.valor}`
    );

    this.transferenciaService
      .add({
        valor: this.valor,
        destino: this.destino,
        data: new Date(),
      })
      .subscribe(
        (result) => {
          console.log(result);
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        (error) => console.error(error)
      );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
