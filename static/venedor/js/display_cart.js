/*function delete_cart_item(e){
    e.preventDefault();
    console.log("DELETE ITEM");
    console.log(e.target.getAttribute('data-index'));
    //var cart  = eval('(' + localStorage['cart'] + ')');
    var cart = JSON.parse(localStorage['cart']);
    console.log("CART");
    console.log(cart);
    cart['items'].splice(e.target.getAttribute('data-index'), 1);
    console.log(JSON.stringify(cart));
    localStorage['cart'] = JSON.stringify(cart);
    console.log(cart);
    display_cart();

}*/

function display_cart(){
    if(localStorage['cart']){
        //var cart  = eval('(' + localStorage['cart'] + ')');
        var cart = JSON.parse(localStorage['cart']);
        if(cart['items']){
            var items = cart['items'];
            var container_list = $('#dropdown-cart-product-list');
            $("#cart-quantity-items").html(items.length);
            var total = 0;
            container_list.html('');
            //'<a title="Delete item" data-index="'+ i +'" class="cart-delete-item"><i class="fa fa-times" data-index="'+ i +'"></i></a>' +
            for(var i=0; i < items.length; i++){
                total += items[i].sub_total;
                var url = '/products/' + items[i].slug + '-' + items[i].id;
                var li = '<li class="item clearfix">' +

                        '<a href="'+ cart_url +'" title="Edit item" class="edit-item"><i class="fa fa-pencil"></i></a>' +
                        '<figure>' +
                                '<a href="'+ url +'">' +
                                    '<img src="'+ items[i].image +'" alt="'+ items[i].name +'">' +
                                '</a>' +
                            '</figure>' +
                            '<div class="dropdown-cart-details">' +
                                '<p class="item-name">' +
                                    '<a href="'+ url +'">'+ items[i].name +'</a>'  +
                                '</p>' +
                                '<p>' +
                                    '<em>'+ items[i].quantity +'</em>' +
                                    '<span class="item-price">$'+ items[i].price +' </span>' +
                                '</p>'+
                            '</div>' +

                           '</li>';
                container_list.append(li);
            }
            $('.total-cart').html('$ ' + String(total));
        }

        /*var items = document.getElementsByClassName("cart-delete-item");
        for(var i=0; i < items.length; i++){
            items[i].addEventListener("click", delete_cart_item);
        }*/
    }
}

display_cart();