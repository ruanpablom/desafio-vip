import React from 'react';
import { Container, Label, SelectStyled, Option } from './styles';

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
    <Container>
      <Label htmlFor="bancos">{name}</Label>
      <SelectStyled disabled={disabled} name={name.toLowerCase()} id={name.toLowerCase()} onChange={e => handleChange(e.target.value === "false" ? false : e.target.value)}>
      <Option selected value="false">Selecione</Option>
        { hasOptions &&
            options.map(option => (
              <Option key={option.id} value={option.id}>{optionToShow(option)}</Option>
            ))
        }
      </SelectStyled>
    </Container>
  );
}