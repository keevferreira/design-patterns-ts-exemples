import { Product } from './IProduct';

/**
 * Documentação:

Importação: Importa a interface Product.

Classe ConcreteProductB: Implementa a interface Product.

Método operation: Retorna uma string específica que descreve o resultado do ConcreteProductB.
 */

// A classe ConcreteProductB implementa a interface Product e define o método operation.
export class ConcreteProductB implements Product {
  // Implementa o método operation da interface Product e retorna uma string específica.
  public operation(): string {
    return 'Result of ConcreteProductB';
  }
}