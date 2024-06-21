import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

interface MicrosoftEntraIdResponse {
  clientPrincipal: {
    identityProvider: string;
    userId: string;
    userDetails: string;
    userRoles: string[];
  } | null;

}

@Injectable({
  providedIn: 'root'
})
export class MicrosfEntraIdService {

  constructor(private http: HttpClient) { }

  getTestMicrosoftActiveD(): Observable<MicrosoftEntraIdResponse> {
    return this.http.get<MicrosoftEntraIdResponse>('/.auth/me').pipe(
      tap((response) => {
        console.log(response);
      })
    );
  }

}
