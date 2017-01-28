export const ascending = 'ascending';
export const descending = 'descending';

const sortByProp = (a, b, propAccessor) => {
    const firstValue = propAccessor(a),
          secondValue = propAccessor(b);

    if(firstValue === secondValue) return 0;

    return firstValue < secondValue ? -1 : 1;
};

const reverseSortingFunc = function reverseSortingFunc(sortingFunc) {
    if(sortingFunc.opposite) {
        return sortingFunc.opposite;
    }
    const opposite = (a, b) => {
        const resultOfSame = sortingFunc(a, b);
        return resultOfSame ? -resultOfSame : 0; // don't reverse polarity of zero
    };
    opposite.opposite = sortingFunc;
    sortingFunc.opposite = opposite;
    return opposite;
};

const reverseDirection = direction => {
    if(direction === ascending) {
        return descending;
    }
    if(direction === descending) {
        return ascending;
    }
    throw new Error('unrecognised direction');
};

export function sortBy(propAccessor) {
    return (a, b) => sortByProp(a, b, propAccessor);
};

export function reverse(value) {
    if(typeof(value) === 'function') {
        return reverseSortingFunc(value);
    }
    return reverseDirection(value);
}