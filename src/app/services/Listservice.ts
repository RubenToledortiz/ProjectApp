import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { List } from '../models/List';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  constructor(private http: HttpClient) {

  }
  //metodos para acceder a la api
  //coger todos
  getList() {
    return this.http.get('http://localhost:3000/api/lista');
  }
  //coger solo uno
  getOneList(id: string) {

    return this.http.get('http://localhost:3000/api/lista/' + id);
  }
  //borrar item
  deleteList(id: string) {
    return this.http.delete('http://localhost:3000/api/lista/' + id);
  }
  //guardar item
  saveList(list: List) {
    return this.http.post('http://localhost:3000/api/lista', list);
  }

}
