import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-radio-button-generico",
  templateUrl: "./radio-button-generico.component.html",
  styleUrls: ["./radio-button-generico.component.css"],
})
export class RadioButtonGenericoComponent implements OnInit {
  @Input() name!: string;
  @Input() options!: string[];
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
