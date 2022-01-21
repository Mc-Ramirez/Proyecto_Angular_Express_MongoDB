import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-plane-datail',
  templateUrl: './plane-datail.component.html',
  styleUrls: ['./plane-datail.component.css']
})
export class PlaneDatailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder : FormBuilder,
    private router : Router,
    private ngZone : NgZone,
    private activatedRouter : ActivatedRoute,
    private crudService : CrudService
  ) { 
    this.getId = this.activatedRouter.snapshot.params.get('id');
    this.crudService.getPlane(this.getId).subscribe(res => {
      this.updateForm.setValue({
        compañia : res['compañia'],
        fabricante : res['fabricante'],
        modelo : res['modelo']  
      });
    });    

    this.updateForm = this.formBuilder.group({
      compañia : [''],
      fabricante : [''],
      modelo : ['']
    })
  }

  ngOnInit(): void {

  }

  onUpdate(): any {
    this.crudService.updatePlane(this.getId, this.updateForm.value)
    .subscribe(() => {
      console.log("Datos modificados de manera correcta");
      this.ngZone.run(() => this.router.navigateByUrl('/plane-list'))
    }, (err) => {
      console.log(err)
    })
  }

}
