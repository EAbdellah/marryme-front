import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function AtLeast(): ValidatorFn {
  return (ctrl: AbstractControl): null | ValidationErrors => {

    const mainValue = ctrl!.value;
    const atleastOnedigitRegex = new RegExp('.*\\d+.*');
    const atleastOneLowerCaseCharRegex = new RegExp('.*[a-z]+.*');
    const atleastOneUperCaseCharRegex = new RegExp('.*[A-Z]+.*');
    const atleastHeigtCharRegex = new RegExp('.{8,}');



    const isAtleastOnedigitRegex:boolean = atleastOnedigitRegex.test(mainValue) ;
    const isAtleastOneUperCaseCharRegex:boolean =atleastOneUperCaseCharRegex.test(mainValue) ;
    const isAtleastOneLowerCaseCharRegex:boolean =atleastOneLowerCaseCharRegex.test(mainValue) ;
    const isAtleastHeigtCharRegex:boolean =atleastHeigtCharRegex.test(mainValue) ;



    let errors:ValidationErrors = {};

    if (!isAtleastHeigtCharRegex){
      errors["no-8-char"]=true
      return errors;
    }

    if (!isAtleastOnedigitRegex && !isAtleastOneUperCaseCharRegex && !isAtleastOneLowerCaseCharRegex){
      errors["no-nombre-min-maj"]=true
      return errors;
    }
    if (!isAtleastOnedigitRegex && !isAtleastOneUperCaseCharRegex ){
      errors["no-nombre-maj"]=true
      return errors;
    }

    if (!isAtleastOnedigitRegex && !isAtleastOneLowerCaseCharRegex ){
      errors["no-nombre-min"]=true
      return errors;
    }
    if (!isAtleastOneLowerCaseCharRegex && !isAtleastOneUperCaseCharRegex ){
      errors["no-min-maj"]=true
      return errors;
    }
    if (!isAtleastOnedigitRegex  ){
      errors["no-nombre"]=true
      return errors;
    }
    if (!isAtleastOneUperCaseCharRegex  ){
      errors["no-maj"]=true
      return errors;
    }
    if (!isAtleastOneLowerCaseCharRegex  ){
      errors["no-min"]=true
      return errors;
    }
    else {
      return null;
    }

  };
}
