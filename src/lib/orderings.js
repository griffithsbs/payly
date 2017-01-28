const ascending = 'ascending';
const descending = 'descending';

const sortByProp = (a, b, propAccessor) => {
    const firstValue = propAccessor(a),
          secondValue = propAccessor(b);

    if(firstValue === secondValue) return 0;

    return firstValue < secondValue ? -1 : 1;
};

const reverseSortingFunc = sortingFunc => {
    if(sortingFunc._reversed) {
        return sortingFunc._reversed;
    }
    const reversed = (a, b) => {
        const resultOfSame = sortingFunc(a, b);
        return resultOfSame ? -resultOfSame : 0; // don't reverse polarity of zero
    };
    reversed._reversed = sortingFunc;
    sortingFunc._reversed = reversed;
    return reversed;
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

function sortBy(propAccessor) {
    return (a, b) => sortByProp(a, b, propAccessor);
};

function reverse(value) {
    if(typeof(value) === 'function') {
        return reverseSortingFunc(value);
    }
    return reverseDirection(value);
}

export { ascending, descending, sortBy, reverse }