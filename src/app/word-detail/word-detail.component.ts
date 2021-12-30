import {Component, OnInit} from '@angular/core';
import {Word} from "../word";
import {Subscription} from "rxjs";
import {DirectoryService} from "../directory.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {
  word: Word | null = {
    id: 0,
    word: '',
    mean: ''
  }
  id: number = 0;
  sub: Subscription

  constructor(
    private directoryService: DirectoryService,
    private activeRouter: ActivatedRoute,
  ) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.word = this.findById(this.id);
      }
    )
  }

  findById(id: number) {
    return this.directoryService.findById(id)
  }

  ngOnInit() {
  }

}
