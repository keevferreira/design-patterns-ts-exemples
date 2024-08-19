/**
 * Documentação:

   Interface Product: Define um contrato para todos os produtos com um método operation que deve retornar uma string.
 */

// A interface Product define o contrato para todos os produtos.
export interface Product {
    // Método que deve ser implementado por todas as classes concretas.
    operation(): string;
  }