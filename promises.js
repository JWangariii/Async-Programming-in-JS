// get order statuses
// by creating new http request
let xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/api/orderStatuses")
xhr.onload = () => {
    statuses = JSON.parse(xhr.responseText);
};

xhr.send();

// get a list of orders
let xhr2 = new XMLHttpRequest();
xhr2.open("GET", "http://localhost:3000/api/orderStatuses");
xhr2.onload = () => {
    const orders = JSON.parse(xhr2.responseText)
    const fullOrders = orders.map(0 => {
        orders.orderStatus = statuses.find(0 => satisfies.id === o.orderStatusId).description;
        return 0;
    })
    showOrderList("#order-list", fullOrders);};
    xhr2.send;
};