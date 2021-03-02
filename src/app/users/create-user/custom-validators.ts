import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";

export function requiredFileType(types:string[]):ValidatorFn{
    return function(abstractControl:AbstractControl):{ [key: string]: boolean } | null {
        const file = abstractControl.value;
        
        if(file){
            const extension = file.name.split('.')[1].toLowerCase();
            if(types.includes(extension)){
                return {
                    requiredFileType : true
                };
            }
            return null;
        }
        return null;
    }
}