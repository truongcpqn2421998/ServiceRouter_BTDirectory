import { Component, OnInit } from '@angular/core';
import {DirectoryService} from "../directory.service";
import {Word} from "../word";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  words: Word[] = [];
  constructor(
    private directoryService: DirectoryService
  ) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.words=this.directoryService.getAll();
  }
}
