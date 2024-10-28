import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { IFormStepComponent, FormStepData } from '../create-project/forms';
import { NON_NEGATIVE_FLOAT_VALIDATOR, UNIFORM_TIME_SPAN_VALIDATOR } from '@biosimulations/shared/ui';
import { SedUniformTimeCourseSimulation } from '@biosimulations/combine-api-angular-client';

@Component({
  selector: 'create-project-inform-time-course-simulation',
  templateUrl: './uniform-time-course-simulation.component.html',
  styleUrls: ['./form-steps.scss'],
})
export class UniformTimeCourseSimulationComponent implements IFormStepComponent, OnInit {
  public formGroup: UntypedFormGroup;
  public nextClicked = false;
  public stepSize?: number;
  public isReRun = false;

  public constructor(private formBuilder: UntypedFormBuilder) {
    this.formGroup = this.formBuilder.group(
      {
        initialTime: [0, [Validators.required, NON_NEGATIVE_FLOAT_VALIDATOR]],
        outputStartTime: [0, [Validators.required, NON_NEGATIVE_FLOAT_VALIDATOR]],
        outputEndTime: [10, [Validators.required, NON_NEGATIVE_FLOAT_VALIDATOR]],
        numberOfSteps: [100, [Validators.required, NON_NEGATIVE_FLOAT_VALIDATOR]],
        step: [null],
      },
      {
        validators: UNIFORM_TIME_SPAN_VALIDATOR,
      },
    );
    this.changeUniformTimeCourseSimulationStep();
  }

  public ngOnInit() {
    if (this.isReRun) {
      this.changeUniformTimeCourseSimulationStep();
    }
  }

  public loadIntrospectedTimeCourseData(timeCourseData: SedUniformTimeCourseSimulation): void {
    this.formGroup.controls.initialTime.setValue(timeCourseData.initialTime);
    this.formGroup.controls.outputStartTime.setValue(timeCourseData.outputStartTime);
    this.formGroup.controls.outputEndTime.setValue(timeCourseData.outputEndTime);
    this.formGroup.controls.numberOfSteps.setValue(timeCourseData.numberOfSteps);
  }

  public populateFormFromFormStepData(formStepData: FormStepData): void {
    // This method is called onInit and thus should set the default vals
    this.formGroup.controls.initialTime.setValue(0); // formStepData.initialTime
    this.formGroup.controls.outputStartTime.setValue(0); // formStepData.outputStartTime
    this.formGroup.controls.outputEndTime.setValue(10); // formStepData.outputEndTime
    this.formGroup.controls.numberOfSteps.setValue(100); // formStepData.numberOfSteps
  }

  public getFormStepData(): FormStepData | null {
    this.formGroup.updateValueAndValidity();
    if (!this.formGroup.valid) {
      return null;
    }
    return {
      initialTime: this.formGroup.value.initialTime,
      outputStartTime: this.formGroup.value.outputStartTime,
      outputEndTime: this.formGroup.value.outputEndTime,
      numberOfSteps: this.formGroup.value.numberOfSteps,
    };
  }

  public changeUniformTimeCourseSimulationStep(): void {
    const endTimeValue = this.formGroup.controls.outputEndTime.value;
    const startTimeValue = this.formGroup.controls.outputStartTime.value;
    const numStepsValue = this.formGroup.controls.numberOfSteps.value;
    if (endTimeValue != null && startTimeValue != null && numStepsValue != null && numStepsValue > 0) {
      this.stepSize = (endTimeValue - startTimeValue) / numStepsValue;
      this.formGroup.controls.step.setValue(this.stepSize);
    }
  }

  public shouldShowRequiredFieldError(): boolean {
    const initialMissing = this.formGroup.hasError('required', 'initialTime');
    const initialInvalid = this.formGroup.hasError('nonNegativeFloat', 'initialTime');
    const startMissing = this.formGroup.hasError('required', 'outputStartTime');
    const startInvalid = this.formGroup.hasError('nonNegativeFloat', 'outputStartTime');
    const endMissing = this.formGroup.hasError('required', 'outputEndTime');
    const endInvalid = this.formGroup.hasError('nonNegativeFloat', 'outputEndTime');
    const stepsMissing = this.formGroup.hasError('required', 'numberOfSteps');
    const missingField = initialMissing || startMissing || endMissing || stepsMissing;
    const invalidField = initialInvalid || startInvalid || endInvalid;
    return this.nextClicked && (missingField || invalidField);
  }

  public shouldShowStepSize(): boolean {
    this.formGroup.updateValueAndValidity();
    return this.stepSize !== undefined && !isNaN(this.stepSize) && this.formGroup.valid;
  }
}
