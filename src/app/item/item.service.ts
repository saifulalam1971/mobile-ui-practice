import { Injectable } from '@angular/core'

import { Item } from './item'

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    { id: 1, name: 'Sakib Al Hasan', role: 'alll-rounder', age: 33 },
    { id: 3, name: 'Tamin Iqbal', role: 'batsman', age: 33 },
    { id: 4, name: 'Musfiqur Rahim', role: 'wicket-keeper' , age: 33 },
    { id: 5, name: 'Mahmudullah', role: 'alll-rounder' , age: 33 },
    { id: 6, name: 'Miraz', role: 'alll-rounder' , age: 33 },
    { id: 7, name: 'Nasum Ahamed', role: 'alll-rounder' , age: 33 },
    { id: 8, name: 'Mehedi', role: 'alll-rounder' , age: 33 },
    { id: 9, name: 'Taskin Ahmed', role: 'Forward' , age: 33 },
    { id: 10, name: 'Mustafizur Rahman', role: 'Bowler' , age: 33 },
    { id: 11, name: 'Tamzid hasan tamin', role: 'Batsman' , age: 33 },
    { id: 12, name: 'Tamzid Hasan', role: 'Bowler' , age: 33 },
    { id: 13, name: 'Nayem Sheik', role: 'Goalkeeper' , age: 33 },
    { id: 14, name: 'Sabbir Ahamed', role: 'Batsman' , age: 33 },
    { id: 17, name: 'Robel Hossain', role: 'Bowler' , age: 33 },
    { id: 18, name: 'Nasir Hossain', role: 'Batsman' , age: 33 },
    { id: 19, name: 'Imrul Kayes', role: 'Batsman' , age: 33 },
    { id: 20, name: 'Nazmul Hasan', role: 'Batsman' , age: 33 },
    { id: 21, name: 'Nazim Uddin', role: 'Batsman' , age: 33 },
    { id: 22, name: 'Ebadat Hossain', role: 'Bowler' , age: 33 },
    { id: 23, name: 'Nazmul Hossain', role: 'Defender' , age: 33 },
    { id: 24, name: 'Robel Hossain', role: 'Bowler' , age: 33 },
    { id: 25, name: 'Nazmul Hasan Shanto', role: 'Batsman' , age: 33  }
  )

  getItems(): Array<Item> {
    return this.items
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0]
  }
}
