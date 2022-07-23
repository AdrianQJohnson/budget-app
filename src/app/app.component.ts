import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/models/expense';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'budget-app';

  readonly STATUS = ["Due", "Processing", "Automatic", "Paid"]
  
  public costs: Expense[] = [
    {
      name: "Groceries",
      typicalCost: 200,
      status: this.STATUS[2]
    }
  ]
  public bills: Expense[] = [
    {
      name: "Spectrum WiFi",
      dueDate: 1,
      typicalCost: 69.99,
      status: this.STATUS[3]
    }
  ]
  public oneCosts: Expense[] = [
    {
      name: "NC Fast Lane",
      dueDate: 12,
      typicalCost: 14.50,
      status: this.STATUS[0]
    }
  ]

  expenseForm = this.formBuilder.group({
    radioExpenseType: 'recurringBill',
    name: '',
    date: 0,
    cost: 0.00,
    status: ''
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

  }

  onSubmit(): void {
    console.log(this.expenseForm.value)
    switch (this.expenseForm.value.radioExpenseType) {
      case "recurringCost":
        this.costs.push(
          {
            name: String(this.expenseForm.value.name),
            dueDate: Number(this.expenseForm.value.date),
            typicalCost: Number(this.expenseForm.value.cost),
            status: this.STATUS[Number(this.expenseForm.value.status)]
          }
        )
        break;
      case "recurringBill":
        this.bills.push(
          {
            name: String(this.expenseForm.value.name),
            dueDate: Number(this.expenseForm.value.date),
            typicalCost: Number(this.expenseForm.value.cost),
            status: this.STATUS[Number(this.expenseForm.value.status)]
          }
        )
        break;
      case "oneTimeCost":
        this.oneCosts.push(
          {
            name: String(this.expenseForm.value.name),
            dueDate: Number(this.expenseForm.value.date),
            typicalCost: Number(this.expenseForm.value.cost),
            status: this.STATUS[Number(this.expenseForm.value.status)]
          }
        )
        break;
    }
  }
}
