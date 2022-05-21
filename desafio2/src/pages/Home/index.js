import React, { useState } from 'react';
import data from '../../data.json'
import Select from '../../components/Select';
import { Container, BoxSelects, Title } from './styles'

export default function Home() {
  const [ selectedOrgao, setSelectedOrgao ] = useState('')
  const [ selectedProduto, setSelectedProduto ] = useState('')

  const findOrgaoById = (orgaoId) => {
    return data.orgaos.find(orgao => orgao.id == orgaoId)
  }

  const findProdutoById = (produtoId) => {
    return data.produtos.find(produto => produto.id == produtoId)
  }

  const handleSelectOrgao = (value) => {
    setSelectedOrgao(value)
    handleSelectProduto('')
  }

  const handleSelectProduto = (value) => {
    setSelectedProduto(value)
  }

  const handleSelectBanco = (value) => {
    alert(`Orgão: ${selectedOrgao} Produto: ${selectedProduto} Banco: ${value ? value : 'Não selecionado'}`)
  }

  return (
    <Container>
      <Title>Desafio VIP</Title>
      <BoxSelects>
        <Select 
          name='Orgaos' 
          disabled={false} 
          handleChange={handleSelectOrgao} 
          hasOptions={true} 
          options={data.orgaos} 
          optionsFieldsToShow={['nome']}
        />
        <Select 
          name='Produtos' 
          disabled={!selectedOrgao} 
          handleChange={handleSelectProduto} 
          hasOptions={selectedOrgao} 
          options={selectedOrgao ? data.produtos.filter(produto => findOrgaoById(selectedOrgao).produtos.includes(produto.id)) : []} 
          optionsFieldsToShow={['nome']}
        />
        <Select 
          name='Bancos' 
          disabled={!selectedProduto} 
          handleChange={handleSelectBanco} 
          hasOptions={selectedProduto} 
          options={selectedProduto ? data.bancos.filter(banco => findProdutoById(selectedProduto).bancos.includes(banco.id)) : []} 
          optionsFieldsToShow={['codigo','nome']}
        />
      </BoxSelects>
    </Container>   
  );
}