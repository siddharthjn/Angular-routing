import { MessageService } from '../message.service';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the Crises
    this.messageService.add('CrisisService: fetched Crises');
    return of(CRISES);
  }

  getCrisis(id): Observable<Crisis> {
    const crisisFound = CRISES.find(crisis => crisis.id === Number(id));
    return of(crisisFound);
  }
}
