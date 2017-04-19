'use strict';

import {Product} from '../framework/Product';

export class Hamburger extends Product {
    private name: string;
    constructor(name: string) {
        super();
        console.log(`${name}バーガーを作ります`);
        this.name = name;
    }
    public eat(): void {
        console.log(`${this.name}バーガーを食べます`);
    }
    public getName() {
        return this.name;
    }
}
