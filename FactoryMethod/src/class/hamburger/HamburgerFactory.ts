'use strict';

import {Factory} from '../framework/Factory';
import {Product} from '../framework/Product';
import {Hamburger} from './Hamburger';

export class HamburgerFactory extends Factory {
    private names: string[] = [];

    protected createProduct(name: string): Product {
        return new Hamburger(name);
    }
    protected registerProduct(product: Product) {
        this.names.push((<Hamburger>product).getName());
    }
    public getNames(): string[] {
        return this.names;
    }
}
