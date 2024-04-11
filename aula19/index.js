/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Wesley',
    sobrenome: 'Costa'
  };
  const b = a;
  
  b.nome = 'Wesley';
  console.log(a);
  console.log(b);