'use strict';

import {Product} from './Product';

export abstract class Factory {
    public create(owner: string): Product {
        let p: Product = this.createProduct(owner);
        this.registerProduct(p);
        return p;
    }
    protected abstract createProduct(owner: string): Product;
    protected abstract registerProduct(product: Product): void;
}
