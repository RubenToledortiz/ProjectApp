import { Component, HostBinding, OnInit } from '@angular/core';
import { List } from 'src/app/models/List';
import { ListService } from 'src/app/services/Listservice';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})

export class listFormComponent implements OnInit {
  //dar estilo css
  @HostBinding('class') classes = 'row';

  //parametros que se van a asignar al objeto list a través del html
  list = new List();
  constructor(private listSer: ListService) {


  }

  ngOnInit(): void {
  }
  //guardar un nuevo item
  saveNewList() {
    this.listSer.saveList(this.list).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )

  }
}
