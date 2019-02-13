import test from 'ava';
import { stub } from 'sinon'
import { getName } from './index.js';
import * as u from './utils.js';

test('It should be able to stub the `capitalise` function;', t => {
    stub(u, 'capitalise').callsFake(name => name.toUpperCase());
    t.is(getName('adam'), 'ADAM');
});
