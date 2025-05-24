import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-actor-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    provideNativeDateAdapter()
  ],
  templateUrl: './actor-form.component.html',
  styleUrls: ['./actor-form.component.css']
})
export class ActorFormComponent {
  form;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ActorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
    name: ['', Validators.required],
    birthDate: [new Date(), Validators.required],
    country: ['', Validators.required],
    photoUrl: ['']
  });
}

  onSubmit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}