import { Directive } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Directive({
  })
  export class CheckboxControlValueAccessor implements ControlValueAccessor {
    writeValue(obj: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnChange(fn: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }
    setDisabledState?(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }
  }