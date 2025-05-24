import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgFor } from '@angular/common';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-director-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    NgFor
  ],
  providers: [
    provideAnimations(),
    provideNativeDateAdapter()
  ],
  templateUrl: './directors-form.component.html',
  styleUrls: ['./directors-form.component.css']
})
export class DirectorFormComponent {
  form;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DirectorFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      birthDate: [new Date(), Validators.required],
      country: ['', Validators.required],
      awards: [[] as string[]],
      photoUrl: ['']
    });
  }

  addAward(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();

    if (value) {
      const currentAwards = this.form.get('awards')?.value || [];
      this.form.get('awards')?.setValue([...currentAwards, value]);
      input.value = '';
    }
    event.preventDefault();
  }

  removeAward(award: string): void {
    const currentAwards = this.form.get('awards')?.value || [];
    this.form.get('awards')?.setValue(currentAwards.filter(a => a !== award));
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