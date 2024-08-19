import { Factory } from './factory/FactoryProduct';
import { Product } from './factory/IProduct';

/**
 * 
 * 

Tipo typeof Factory:

Quando você declara factory: typeof Factory, está indicando que o parâmetro factory é do tipo que representa a própria classe Factory.
Isso permite que você acesse métodos estáticos da classe Factory através de factory.createProduct(type).

Método Estático createProduct:
createProduct é um método estático, então não faz sentido chamá-lo a partir de uma instância da classe, mas sim a partir da própria classe.
Com factory: typeof Factory, você está efetivamente dizendo que factory pode ser usado para chamar métodos estáticos como createProduct.

Por Que Usar typeof Factory?

Permite Acesso a Métodos Estáticos: Usar typeof Factory é necessário para acessar métodos estáticos de uma classe, porque você não pode acessar métodos estáticos através de instâncias.
Passagem de Classes Como Argumentos: Às vezes você precisa passar a própria classe como argumento para funções, e typeof ClassName é a maneira de fazer isso. 
 * 
 */

function clientCode(factory: typeof Factory, type: string): void {
  try {
    const product: Product = factory.createProduct(type);
    console.log(product.operation());
  } catch (e) {
    if (e instanceof Error) { //Tenho que passar o type, e falo que ele eh uma instancia da classe erro, no typescript erro nao eh um tipo e sim uma classe. 
      console.error(e.message);
    } else {
      console.error('An unknown error occurred'); // Para casos onde o erro não é um Error
    }
  }
}

clientCode(Factory, 'A'); // Output: Result of ConcreteProductA
clientCode(Factory, 'B'); // Output: Result of ConcreteProductB
clientCode(Factory, 'C'); // Output: Invalid product type


