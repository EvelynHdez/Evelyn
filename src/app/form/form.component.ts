import { Component, OnInit, Input } from '@angular/core';

const controller = document.querySelector('ion-alert-controller');

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input()
  name:string;

  cities=[
    {
      value:1,
      name: "San Nicolás"
    },
    {
      value:2,
      name: "Monterrey"
    },
    {
      value:3,
      name: "Escobedo"
    },
    {
      value:4,
      name: "Juárez"
    },
    {
      value:5,
      name: "Guadalupe"
    },
    {
      value:6,
      name: "Apodaca"
    },
    {
      value:7,
      name: "San Pedro"
    },
    {
      value:8,
      name: "Santa Catarina"
    },
    {
      value:9,
      name: "Santiago"
    },
    {
      value:10,
      name: "García"
    },
  ];

  info={
    name:"",
    lastName:"",
    phone:"",
    city:""
  };

  constructor() { }

  ngOnInit() {}

  sendForm(name,lastName,phone,city){
    alert("Gracias por ayudarnos "+this.name+"!");
    this.info.name=name;
    this.info.lastName=lastName;
    this.info.phone=phone;
    this.info.city=city;
    console.log(this.info);
  }
}
