import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Item } from './../../item/item'
import { ItemService } from './../../item/item.service'
import * as camera from "@nativescript/camera";
import { ImageAsset } from '@nativescript/core';
@Component({
    selector: 'ns-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item: Item;
  img:any;

  constructor(private itemService: ItemService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.item = this.itemService.getItem(id)
  }
  

  openCamera() {
    let payload = {};
    const options = {
      width: 300,
      height: 300,
      keepAspectRatio: true,
      saveToGallery: false
    };

    camera.requestPermissions().then(()=>{  
        camera.takePicture(options)
        .then((imageAsset: ImageAsset) => {
          console.log("got file from camera", imageAsset);
        //   this.img=imageAsset;

        }).catch(err => {
          console.log(err.message);
        });
       }).catch(err=> {
         console.log(err.message);
       })
  }
}
