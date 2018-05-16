const api = (function(){
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/angelo/';

    const getItems = (callback) => {
        $.getJSON(BASE_URL + 'items', callback)
    };

    const createItem = (name, callback) => {
        // const newItem = JSON.stringify({ name });
        $.ajax({
            url: BASE_URL + 'items',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name }),
            success: callback,
        });
    };

    const updateItem = (id, updateData, callback) => {
        // const newData = JSON.stringify(updateData);

        $.ajax({
            url: BASE_URL + 'items/' + id,
            method: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(updateData),
            success: callback,
            error: shoppingList.handleError
        });
    };

    const findAndDelete = (id, callback) => {
        $.ajax({
            url: BASE_URL + 'items/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            data: JSON.stringify({"id": id}),
            success: callback
        });
    }

    return {
        getItems,
        createItem,
        updateItem,
        findAndDelete,
    };
}());