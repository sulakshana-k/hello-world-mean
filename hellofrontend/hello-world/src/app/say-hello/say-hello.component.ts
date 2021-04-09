// OnInit is an interface.
import { Component, OnInit } from '@angular/core';
// 'HelloServiceService' is a class defined in hello-service.service.ts file.
import { HelloServiceService } from 'src/app/hello-service.service';
// These are required for building reactive forms.
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  // 'selector' is used to put this class in some html file to create its object.
  selector: 'app-say-hello',
  // Path of corresponding html file.
  templateUrl: './say-hello.component.html',
  // Path of corresponding css file.
  styleUrls: ['./say-hello.component.css']
})

// 'implements OnInit' means that OnInit is an interface and 'implements' keuword ensures that
// its all functions are duly defined here.
export class SayHelloComponent implements OnInit
{
  // 'hello' is an object.
  hello = { greetings: '' }

  // 'objForm' is declared with type 'FormGroup'.
  // In Typescript types of variables are written on the right side. It is the opposite
  // of C++.
  objForm: FormGroup;

  // 'ordersData' is an array of objects.
  ordersData = [
                  { id: 100, name: 'order 1' },
                  { id: 200, name: 'order 2' },
                  { id: 300, name: 'order 3' },
                  { id: 400, name: 'order 4' }
               ];
     
  // A class member cannot be constant. This is an error.
  /*
  const ordersData = [
                        { id: 1, name: 'order 1' },
                        { id: 2, name: 'order 2' },
                        { id: 3, name: 'order 3' },
                        { id: 4, name: 'order 4' }
                     ];
 */

  // 'constructor' is to be used for dependency injection.
  // Here 'objHelloService' is a variable of type 'HelloServiceService' class.
  // and 'formBuilder' is a variable of type 'FormBuilder'.
  // 'FormBuilder' is a syntactic sugar for helping us to make FormGroup and 
  // other elements in an easier way.
  constructor(  private objHelloService: HelloServiceService, 
                private formBuilder: FormBuilder )
  {
    // Here we are creating a form group using FormBuilder.
    // This has to be done once so it can be done in a constructor.
    this.objForm = this.formBuilder.group({
                                            orders: new FormArray([])
                                          });
    // 'addCheckboxes' is a function. It needs to be called once hence it has been
    // called from the constructor.                                          
    this.addCheckboxes();
  }

  private addCheckboxes()
  {
    // 'ordersData' is an array of objects.
    // i.e. ordersData = [ { id: 100, name: 'order 1' }, ... ]

    // forEach takes a callback function as an argument.
    // forEach is applied on an array and it takes each element from that array and 
    // applies the callback function on it.

    // This callback function has 3 arguments: 
    //    individual item of the array, 
    //    index, 
    //    whole array.
    this.ordersData.forEach( (argIndividualElements, argIndex, argArray) => {
                                  // This function will be called for each element of the 'ordersData' array.
                                  // Result of `argIndex === 0` be true for the first index so for the zeroth index
                                  // FormControl's default value will be set to true.
                                  const control = new FormControl( argIndex === 0 );

                                  // One way: This is a way to get the orders array of the FormElement.
                                  // (this.objForm.controls.orders as FormArray).push(control);

                                  // Second way: I created the function for retuning the orders array and 
                                  // I am calling that function to get the array.
                                  this.getOrdersArray.push( control );

                                  console.log( "Individual elements: ", argIndividualElements )
                                  console.log( "Index: ", argIndex )
                                  console.log( "Array: ", argArray )
                                });
  }

  get getOrdersArray(): FormArray 
  {
    return (<FormArray>this.objForm.get('orders'));
  }

  submit()
  {
  //  const selectedOrderIds = this.objForm.value.orders.map((v:string, i:number) => v ? 
    //                                  this.objForm.value.orders[i].id : null).filter( (v:number) => v !== null);
    //console.log("WWW: ", selectedOrderIds);

    const selectedOrderIds = this.ordersData
                      .filter(i => i !== null) //Filter array of orders by null check
                      .map(v => v.id)  //Get only ids out of array of orders
                      console.log(selectedOrderIds)  //[100, 200, 300, 400]

  }
  
  ngOnInit(): void {  }

  submitted = false

  saveHello() 
  {
    const data = {
                    greetings: this.hello.greetings
                  };

    this.objHelloService.create(data).subscribe(
                                                  response => {
                                                                console.log(response);
                                                                this.submitted = true;
                                                              },
                                                  error => {
                                                              console.log("From say-hello.component.ts: ",error);
                                                            }
                                                );
  }

  newHello()
  {
    this.submitted = false;
    this.hello = {
                    greetings: ''
                  };
  }
}


/*

<div class="submit-form">
    <div *ngIf="!submitted">
      <div class="form-group">
        <!-- Set label on the browser page. -->
        <label for="hello">Hello</label>
        <!-- Produces an input text box -->
        <input
          type="text"
          class="form-control"
          id="greetings"
          required
          [(ngModel)]="hello.greetings"
          name="greetings"
        />
      </div>
    
      <!-- Makes a button, on its click call a function -->
      <button (click)="saveHello()" class="btn btn-success">Submit</button>
    </div>
  
    <!-- if clause- 'submitted' is a variable in .ts file. -->
    <div *ngIf="submitted">
      <!-- This message is displayed if 'submitted' value is true -->
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" (click)="newHello()">Add</button>
    </div>
  </div>
  



  <form [formGroup]="objForm" (ngSubmit)="submit()">
  <label formArrayName="orders" *ngFor= "let order of objForm.value.orders.controls; let i = index">
    <input type="checkbox" [formControlName]="i">
      {{ordersData[i].name}}
  </label>
   
  <button>submit</button>
</form>

*/