import { Component, OnInit } from '@angular/core'
import { Dialogs } from '@nativescript/core'
import { Item } from './../../item/item'
import { ItemService } from './../../item/item.service'

@Component({
  selector: 'ns-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }
  openAlert(){
    Dialogs.confirm({
      title: 'Confirm!',
      message: 'Are you sure you want to do this?',
      okButtonText: 'Yes',
      cancelButtonText: 'No',
      neutralButtonText: 'Cancel',
    }).then((result) => {
      console.log(result)
    })
  }
}
