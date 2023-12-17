import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '@app/enviroment'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getData() {
    console.log('passou aqui')

    return this.http.get(`${this.apiUrl}/`)
  }
}
