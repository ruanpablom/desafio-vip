import React from 'react';

// import { Container } from './styles';

export default function Select({name, disabled, handleChange, hasOptions, options, optionsFieldsToShow}) {
  const optionToShow = (option) => {
    let showString = ''
    optionsFieldsToShow.forEach((optionField, index) => {
      if(index === 0){
        showString = option[optionField]
      }else{
        showString += ` - ${option[optionField]}`
      }
    })
    return showString
  }

  return (
    <>
      <label htmlFor="bancos">{name}</label>
      <select disabled={disabled} name={name.toLowerCase()} id={name.toLowerCase()} onChange={e => handleChange(e.target.value === "false" ? false : e.target.value)}>
      <option selected value="false">Selecione</option>
        { hasOptions &&
            options.map(option => (
              <option key={option.id} value={option.id}>{optionToShow(option)}</option>
            ))
        }
      </select>
    </>
  );
}