import { describe, it } from 'mocha';
import chai from 'chai';

import { ascending, descending, sortBy, reverse } from 'lib/orderings';

describe('orderings', () => {
    chai.should();

    const sortingFunc = sortBy(x => x.p);

    describe('sortBy should create a sorting function which applies', () => {

        it('ascending ordering of numeric values', () => {
            sortingFunc({ p: 1 }, { p: 2 }).should.be.lt(0);
            sortingFunc({ p: 14 }, { p: 14 }).should.equal(0);
            sortingFunc({ p: 0 }, { p: -1 }).should.be.gt(0);

            sortingFunc({ p: 23.45 }, { p: 234.5 }).should.be.lt(0);
            sortingFunc({ p: 345.67 }, { p: 345.67 }).should.equal(0);
            sortingFunc({ p: 12000 }, { p: 12000.00 }).should.equal(0);
            sortingFunc({ p: 999 }, { p: -1000 }).should.be.gt(0);
        });

        it('ascending alphabetical ordering of string values', () => {
            sortingFunc({ p: 'a' }, { p: 'b' }).should.be.lt(0);
            sortingFunc({ p: 'a' }, { p: 'a' }).should.equal(0);
            sortingFunc({ p: 'b' }, { p: 'a' }).should.be.gt(0);

            sortingFunc({ p: 'Z' }, { p: 'z' }).should.be.lt(0);
            sortingFunc({ p: 'b' }, { p: 'B' }).should.be.gt(0);

            sortingFunc({ p: '8' }, { p: '9' }).should.be.lt(0);
            sortingFunc({ p: '9' }, { p: '9' }).should.equal(0);
            sortingFunc({ p: '20' }, { p: '100' }).should.be.gt(0);

            sortingFunc({ p: `sometimes the ligh` }, { p: `t's all shining on me` }).should.be.lt(0);
            sortingFunc({ p: 'other times' }, { p: 'other times' }).should.equal(0);
            sortingFunc({ p: 'I can barely see' }, { p: 'I can barely sea' }).should.be.gt(0);
        });

    });

    describe('reverse', () => {

        const reversedSortingFunc = reverse(sortingFunc);

        describe('an ascending sorting function when reversed should apply ', () => {

            it('descending ordering of numeric values', () => {
                reversedSortingFunc({ p: 1 }, { p: 2 }).should.be.gt(0);
                reversedSortingFunc({ p: 14 }, { p: 14 }).should.equal(0);
                reversedSortingFunc({ p: 0 }, { p: -1 }).should.be.lt(0);

                reversedSortingFunc({ p: 23.45 }, { p: 234.5 }).should.be.gt(0);
                reversedSortingFunc({ p: 345.67 }, { p: 345.67 }).should.equal(0);
                reversedSortingFunc({ p: 12000 }, { p: 12000.00 }).should.equal(0);
                reversedSortingFunc({ p: 999 }, { p: -1000 }).should.be.lt(0);
            });

            it('descending alphabetical ordering of string values', () => {
                reversedSortingFunc({ p: 'a' }, { p: 'b' }).should.be.gt(0);
                reversedSortingFunc({ p: 'a' }, { p: 'a' }).should.equal(0);
                reversedSortingFunc({ p: 'b' }, { p: 'a' }).should.be.lt(0);

                reversedSortingFunc({ p: 'Z' }, { p: 'z' }).should.be.gt(0);
                reversedSortingFunc({ p: 'b' }, { p: 'B' }).should.be.lt(0);

                reversedSortingFunc({ p: '8' }, { p: '9' }).should.be.gt(0);
                reversedSortingFunc({ p: '9' }, { p: '9' }).should.equal(0);
                reversedSortingFunc({ p: '20' }, { p: '100' }).should.be.lt(0);

                reversedSortingFunc({ p: `sometimes the ligh` }, { p: `t's all shining on me` }).should.be.gt(0);
                reversedSortingFunc({ p: 'other times' }, { p: 'other times' }).should.equal(0);
                reversedSortingFunc({ p: 'I can barely see' }, { p: 'I can barely sea' }).should.be.lt(0);
            });

        });

        it('should reverse directions', () => {
            reverse(ascending).should.equal(descending);
            reverse(descending).should.equal(ascending);
        });

        describe('the result of reversing the reverse of X should be X', () => {

            it('when X is a function', () => {
                const someFunction = () => { };
                reverse(reverse(someFunction)).should.equal(someFunction);
            });

            it('when X is a direction', () => {
                reverse(reverse(ascending)).should.equal(ascending);
                reverse(reverse(descending)).should.equal(descending);
            });

        });

      });

});