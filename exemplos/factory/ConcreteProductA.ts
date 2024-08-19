import { Product } from './IProduct';

/**
 * Documentação:

Importação: Importa a interface Product que define o contrato para todos os produtos.

Classe ConcreteProductA: Implementa a interface Product.

Método operation: Retorna uma string específica que descreve o resultado do ConcreteProductA.
 */

// A classe ConcreteProductA implementa a interface Product e define o método operation.
export class ConcreteProductA implements Product {
  // Implementa o método operation da interface Product e retorna uma string específica.
  public operation(): string {
    return 'Result of ConcreteProductA';
  }
}