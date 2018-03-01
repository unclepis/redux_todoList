let itemIndex = 0;
export const addItem = text => {
    return {
        type: 'add_item',
        id: itemIndex++,
        text
    }
}

export const toggleItem = id => {
    return {
        type: 'toggle_item',
        id
    }
}

export const deleteItem = id => {
    return {
        type: 'delete_item',
        id
    }
}

export const filterItem = filter => {
    return {
        type: 'set_Filter',
        filter
    }
}
