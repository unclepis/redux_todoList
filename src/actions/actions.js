let itemIndex = 0;
export const addItem = text => {
    return {
        type: 'add_item',
        payload: {
            completed: false,
            id: itemIndex++,
            text
        }
    }
}

export const toggleItem = id => {
    return {
        type: 'toggle_item',
        payload: id
    }
}

export const deleteItem = id => {
    return {
        type: 'delete_item',
        payload: id
    }
}

export const filterItem = filter => {
    return {
        type: 'set_Filter',
        payload: filter
    }
}

export const loadItem = (types) => { // localStorage做数据持久化
    if (types === 'filter') {
        return {
            type: 'load_filter'
        }
    }
    return {
        type: 'load_item'
    }
}
