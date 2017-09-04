export const g1 = {
    gen: function* () {
        console.log('GENERATOR!');
    },
    test: () => {
        let g = g1.gen();

        let n1 = g.next();
        console.log(n1['value']);
        console.log(n1['done']);
    }
};

export const g2 = {
    gen: function* () {
        console.log('HELLO!');
        let o = yield 'GENERATOR!';
        console.log('I am back and bring ' + o);
    },
    test: () => {
        let g = g2.gen();

        let n1 = g.next();       // 调用 next 方法开始执行函数体，执行到 yield 时暂停并返回，返回值是对象
        console.log(n1['value']);   // value 属性的值是 yield 右侧表达式的执行结果
        console.log(n1['done']);    // done 属性表示整个 generator 是否完成

        let n2 = g.next('something from outside'); // next 方法的参数作为 yield 的结果
        console.log(n2['done']);    // 完成
    }
};

export const g3 = {
    gen: function* (x) {
        let y = 2 * (yield (x + 1));
        let z = yield (y / 3);

        return (x + y + z);
    },
    test: () => {
        let g = g3.gen();

        console.log(g.next());
        console.log(g.next(12));
        console.log(g.next(13));
    }
};

export const g4 = {
    gen: function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;

        return 6;
    },
    test: () => {
        for (let v of g4.gen()) {
            console.log(v);
        }
    }
};
