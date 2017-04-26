'use strict';

export default class Singleton {
    private static singleton: Singleton = new Singleton();
    private counter: number;
    constructor() {
        this.counter = 0;
        console.log('Singletonインスタンスを生成');
    }
    public static getInstance():Singleton {
        return this.singleton;
    }
    public getCounter(): number {
        return this.counter;
    }
    public countUp(): void {
        console.log('counterに1を足します');
        this.counter++;
    }
}
