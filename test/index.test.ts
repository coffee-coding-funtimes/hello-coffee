import { expect } from 'chai';
import { makeHello } from '../src';

describe('makeHello', () => {
  it('returns "Hello world, have a coffee! ☕" when called without a param', () => {
    expect(makeHello()).to.equal('Hello world, have a coffee! ☕️');
  });
  it('returns "Hello world, have a coffee! ☕" when called with an empty string', () => {
    expect(makeHello('')).to.equal('Hello world, have a coffee! ☕️');
  });
  it('returns "Hello bob, have a coffee! ☕" when given the name bob', () => {
    expect(makeHello('bob')).to.equal('Hello bob, have a coffee! ☕️');
  });
});
