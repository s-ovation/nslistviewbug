import { Component, OnInit } from "@angular/core";
import { ItemsLoading } from "@nativescript/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
  selector: "ns-items",
  templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  templateSelector() {
    return "main";
  }

  onItemLoading(args: ItemsLoading) {
    console.log("args", args.index);
  }
}
