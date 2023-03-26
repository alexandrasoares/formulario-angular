import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-tabela-generica",
  templateUrl: "./tabela-generica.component.html",
  styleUrls: ["./tabela-generica.component.css"],
})
export class TabelaGenericaComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() nameOfCollumns: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
