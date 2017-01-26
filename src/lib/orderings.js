export const ascending = 'ascending';
export const descending = 'descending';

const oppositeDirectionOf = direction => {
    if(direction === ascending) {
        return descending;
    }
    if(direction === descending) {
        return ascending;
    }
    throw new Error('unrecognised direction');
};

const oppositeSortingFunctionOf = f => f.opposite;

export function oppositeOf(value) {
    if(typeof(value) === 'function') {
        return oppositeSortingFunctionOf(value);
    }
    return oppositeDirectionOf(value);
}

const sortByProp = (a, b, propName, direction) => {
    direction = direction || ascending;
    if(a[propName] === b[propName]) return 0;

    const comesBeforeResult = direction === ascending ? -1 : 1;
    const comesAfterResult = -comesBeforeResult;

    return a[propName] < b[propName] ? comesBeforeResult : comesAfterResult;
};

const byName = function byName(a, b) {
    return sortByProp(a, b, 'lastName') || sortByProp(a, b, 'firstName');
};
byName.ascending = byName;
byName.descending = function(a, b) {
    return sortByProp(a, b, 'lastName', descending) || sortByProp(a, b, 'firstName', descending);
};
byName.opposite = byName.descending;
byName.descending.opposite = byName;

export const sortingFuncs = {
    byName
};