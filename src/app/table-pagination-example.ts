import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample implements OnInit{
 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  colArr = ['position', 'name', 'weight', 'symbol'];

  icoList = ['home', 'camera_enhance'];

  colObjArr = [];

  disableBtn:Boolean = false;

  testObj = {
    name : "Manish",
    lastName : "Singh",
    title: "Analyst"
  };

  statArr = ["VPNA-QAT-MSC032-43-1", "VPNA-QAT-MSC032-42-1", "VPNA-QAT-MSC032-41-1", "VPNA-QAT-MSC028-41-2", "VPNA-QAT-MSC028-42-2"];

  vmList : Set<string> = new Set();

  public idx = 0;

  displayedColumns = [];

  ngOnInit() {

    this.idx = 0;
    for(var col of this.colArr) {
      let testObj = {};
      testObj["columnDef"]=col;
      testObj["header"]=col.toUpperCase();
      testObj["cell"]= (element : any)=> element[testObj["columnDef"]];

      this.colObjArr.push(testObj);
    }

    for(let key in this.testObj) {
      console.log("Key :- "+key);
      console.log("Value :- "+this.testObj[key]);
    }

    console.log("ColObj array :- "+JSON.stringify(this.colObjArr));

    this.displayedColumns = this.colObjArr.map(c => c.columnDef);

    for(let vmName of this.statArr) {
      console.log("VM : "+vmName);
      let strArr:Array<string> = vmName.split("-");
      if(strArr.length > 1) {
        strArr.length = strArr.length - 2;
      }
      console.log("VM Name :- "+JSON.stringify(strArr));
      console.log(strArr.join("-"));
      this.vmList.add(strArr.join("-"));
    }

    console.log(this.vmList.size);
    console.log("VM List :- "+JSON.stringify(this.vmList));
    

    }


  dataSource = new ExampleDataSource();
 
}


const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];


export class ExampleDataSource extends DataSource<any> {

  connect(): Observable<Element[]> {
    return Observable.of(ELEMENT_DATA);  
  }

  disconnect() {}
}