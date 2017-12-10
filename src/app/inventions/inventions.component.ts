import { Component, OnInit } from '@angular/core';

export class Invention{
    name : String;
    inventor: String;
    year: String;

}


@Component({
  selector: 'app-inventions',
  templateUrl: './inventions.component.html',
  styleUrls: ['./inventions.component.css']
})

export class InventionsComponent implements OnInit {
    nameModel : String;
    inventorModel: String;
    yearModel: String;
    inventions: Invention[];
    
  constructor() { 
    this.nameModel = '';
    this.inventorModel = '';
    this.yearModel = '';
  
    let defaultInvention: Invention = {
    name : 'C Programming Language',
    inventor : 'Dennis Ritchie',
    year : '1972'
    }
    
    this.inventions = [defaultInvention];
                }

  ngOnInit() {
            }
  
  //create function for adding new inventions 
  createInvention(){
  
  //intitalize a new invention using data coming from template
  let newInvention : Invention = {
    name : this.nameModel,
    inventor: this.inventorModel,
    year: this.yearModel
  
  };
  
  //push newly created incention object to array
  this.inventions.push(newInvention);
  
  //set model values to '' again
  this.nameModel = this.yearModel = this.inventorModel = '';
  
  }

}


