import {expect} from 'chai';
import {setClientSideGlobal} from '../';
const {describe, it} = global;

describe('setClientSideGlobal', () => {
  it('should return valid js which sets the given variable', async () => {
    let testGlobal;
    const js = setClientSideGlobal('testGlobal', {foo: 'bar', baz: 'quix'});
    eval(js); // eslint-disable-line no-eval
    expect(testGlobal).to.deep.equal({foo: 'bar', baz: 'quix'});
  });
});
