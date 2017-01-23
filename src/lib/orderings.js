
const sortByProp = (a, b, propName) => {
    if(a[propName] === b[propName]) return 0;
    return a[propName] < b[propName] ? -1 : 1;
};

export function byName(a, b) {
    return sortByProp(a, b, 'lastName') || sortByProp(a, b, 'firstName');
}