import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-plane',
  templateUrl: './add-plane.component.html',
  styleUrls: ['./add-plane.component.css']
})
export class AddPlaneComponent implements OnInit {

  planeForm: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    public router : Router,
    public ngZone : NgZone,
    private crudService : CrudService
  ) { 
    this.planeForm = this.formBuilder.group({
      compañia : [''],
      fabricante : [''],
      modelo : ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any{
    this.crudService.AddPlane(this.planeForm.value)
    .subscribe(() => {
      console.log("se ha enviado los datos satisfatoriamente");
      this.ngZone.run(() => this.router.navigateByUrl('/plane-list'))
    }, (err) => {
      console.log(err)
    });
  }

}
