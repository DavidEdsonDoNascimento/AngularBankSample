import { Injectable } from '@angular/core';
import { Transferencia } from '../types/Transfer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000/transferencias';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: Transferencia[] = [];

  constructor(private httpClient: HttpClient) {
    this.listaTransferencias = [];
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  all(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(URL);
  }

  add(transferencia: Transferencia): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(URL, {
      ...transferencia,
      data: new Date(),
    });
  }
}
