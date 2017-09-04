import { getFetch } from './fetch';
import { p1, p2 } from './promise'

getFetch();

p1.test();

p2.testXhrPromise();
p2.testMultiTask();
p2.testPromiseAll();
