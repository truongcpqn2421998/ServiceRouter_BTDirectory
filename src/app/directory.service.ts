import { Injectable } from '@angular/core';
import {Word} from "./word";

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  word: Word[] = [
    {
      id: 1,
      word: 'monday',
      mean: 'thứ 2',
    },
    {
      id: 2,
      word: 'tuesday',
      mean: 'thứ 3',
    },
    {
      id: 3,
      word: 'wednesday',
      mean: 'thứ 4',
    },
    {
      id :4,
      word: 'thursday',
      mean: 'thứ 5',
    },
    {
      id:5,
      word: 'friday',
      mean: 'thứ 6',
    },
    {
      id:6,
      word: 'saturday',
      mean: 'thứ 7',
    },
    {
      id:7,
      word: 'sunday',
      mean: 'chủ nhật',
    }
  ]

  getAll(){
    return this.word;
  }

  findById(id:number){
    return this.word.find( item => item.id === id)
  }
  constructor() { }
}
