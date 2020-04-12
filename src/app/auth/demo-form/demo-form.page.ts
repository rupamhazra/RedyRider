import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.page.html',
  styleUrls: ['./demo-form.page.scss'],
})
export class DemoFormPage implements OnInit {
  form: FormGroup;
  fields = [
    {
      "displayType": "text",
      "label": "First Name",
      "name": "text_1",
      "required": false,
      "value": ""
    },
    {
      "displayType": "textarea",
      "label": "Description",
      "name": "text_2",
      "required": false,
      "value": ""
    },
    {
      "displayType": "dropdown",
      "label": "Identity Proof",
      "name": "text_3",
      "required": false,
      "value": "",
      "options": [
        'Votar Id',
        'Adhhar Card',
        'Ration Card'
      ]
    },
    {
      "displayType": "radio",
      "label": "Gender",
      "name": "text_4",
      "required": false,
      "value": "",
      "options": [
        'male',
        'female'
      ]
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.toFormGroup();
  }
  toFormGroup() {
    let group: any = {};
    this.fields.forEach(field => {
      group[field.name] = field.required ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
  save() {
    console.log('form data', this.form.value);
  }

}
