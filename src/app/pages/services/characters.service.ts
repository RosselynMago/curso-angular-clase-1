import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class CharactersResolver implements Resolve<any> {
  private readonly http = inject(HttpClient);
  resolve(): Observable<any> {
    return this.http.get<any>(env.api_url+'character');
  }
}
