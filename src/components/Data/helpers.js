export function getSortedData(data, key, type) {
    return data.sort((a, b) => {
        if (typeof a[key] === 'number') {
            if (type === 'ASC') {
                return a[key] - b[key];
            } else {
                return b[key] - a[key];
            }
        } else {
            if (type === 'ASC') {
                return (a[key] + '').localeCompare(b[key]);
            } else {
                return (b[key] + '').localeCompare(a[key]);
            }
        }
    });
}

export function getFiltredData(data, keys, query) {
    query = query.toLowerCase();

    return data.filter((item) => {
        for (let i = 0; i < keys.length; i++) {
            if (typeof item[keys[i].key] === 'number') {
                if (item[keys[i].key] === +query) {
                    return true;
                }
            } else {
                if ((item[keys[i].key] + '').toLowerCase().indexOf(query) !== -1) {
                    return true;
                }
            }
        }

        return false;
    });
}

export function getPartedData(data, perPage) {
    let page = 0;
    let arr = [[]];

    for (let i = 0; i < data.length; i++) {
        arr[page].push(data[i]);

        if ((i + 1) % perPage === 0 && i !== 0) {
            arr[++page] = [];
        }
    }

    return arr;
}