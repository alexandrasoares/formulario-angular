import { Component, OnInit } from '@angular/core';
import { RadioButtonOption } from '../enum/radio-button.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedOption!: RadioButtonOption;
  collumnsName: string[] = ['Codigo', 'Nome', 'Preço'];
  myData: any[] = [
    { name: "Product 1", codeOfProduct: '001', price: 10 },
    { name: "Product 2", codeOfProduct: '002', price: 20 },
    { name: "Product 3", codeOfProduct: '003', price: 30 },
    { name: "Product 4", codeOfProduct: '004', price: 40 },
    { name: "Product 5", codeOfProduct: '005', price: 50 },
    { name: "Product 6", codeOfProduct: '006', price: 60 },
    { name: "Product 7", codeOfProduct: '007', price: 70 },
    { name: "Product 8", codeOfProduct: '008', price: 80 },
    { name: "Product 9", codeOfProduct: '009', price: 90 },
    { name: "Product 10", codeOfProduct: '010',  price: 100 },
  ];

  opcoesRadioButton = ['Opcao 1', 'Opcao 2', 'Opcao 3'];

  constructor() { }

  ngOnInit(): void {
  }

}
