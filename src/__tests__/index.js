import { expect } from 'chai';
import { _setClientSideGlobal, get, _allSettings } from '../';
const { describe, it } = global;

describe('_setClientSideGlobal', () => {
  it('should return valid js which sets the given variable', () => {
    const window = {};
    const js = _setClientSideGlobal('testGlobal', {foo: 'bar', baz: 'quix'});
    eval(js); // eslint-disable-line no-eval
    expect(window.testGlobal).to.deep.equal({foo: 'bar', baz: 'quix'});
  });
});

