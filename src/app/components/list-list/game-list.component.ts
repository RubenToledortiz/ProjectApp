import { Component, HostBinding, OnInit } from '@angular/core';
import { List } from 'src/app/models/List';
import { ListService } from 'src/app/services/Listservice';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class ListComponent implements OnInit {
  
  @HostBinding ('class') classes = 'row';
  games:any = [];
 
  constructor(private listService: ListService) { 


  }

  ngOnInit(): void {
    this.getlists();
  }

  getlists(){
    this.listService.getList().subscribe(
      res => {this.games = res},
      err => console.log(err)
    )
  }
   deletelist(id:string){
    this.listService.deleteList(id).subscribe(
      res => {
        console.log(res)
        this.getlists();
      },
      err => console.log(err)
    )
   }
}
