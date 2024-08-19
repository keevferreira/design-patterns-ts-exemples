import { Product } from './IProduct';
import { ConcreteProductA } from './ConcreteProductA';
import { ConcreteProductB } from './ConcreteProductB';

/**
 * Documentação:

  Importação: Importa a interface Product e as classes concretas ConcreteProductA e ConcreteProductB.
  
  Classe Factory: Implementa o padrão Factory Method.
  Método createProduct:
  
  Parâmetro type: Determina o tipo do produto a ser criado.
  
  Retorno: Cria e retorna uma instância do produto apropriado com base no tipo fornecido.
  
  Tratamento de Erro: Lança um erro se o tipo fornecido não corresponder a nenhum produto conhecido.
 */

// A classe Factory fornece um método estático para criar instâncias de produtos.
export class Factory {
  // Método estático para criar produtos com base no tipo fornecido.
  public static createProduct(type: string): Product {
    if (type === 'A') {
      // Cria e retorna uma instância de ConcreteProductA se o tipo for 'A'.
      return new ConcreteProductA();
    } else if (type === 'B') {
      // Cria e retorna uma instância de ConcreteProductB se o tipo for 'B'.
      return new ConcreteProductB();
    } else {
      // Lança um erro se o tipo fornecido não for válido.
      throw new Error('Invalid product type');
    }
  }
}