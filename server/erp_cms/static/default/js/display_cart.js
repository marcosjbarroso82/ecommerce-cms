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

                var li = '<li class="media">' +
                            '<div class="media-left">' +
                                '<a sref="'+ url +'">'+
                                  '<img class="media-object img-responsive img-thumbnail" src="'+ items[i].image +'" alt="'+ items[i].name +'" alt="...">'+
                                '</a>' +
                            '</div>' +
                            '<div class="media-body">' +
                                '<h4 class="media-heading">'+ items[i].name +'</h4>' +
                                '<strong>Cantidad:</strong>' + items[i].quantity + '<strong>Precio:</strong> $'+ items[i].price +
                            '</div>' +
                           '</li>';
                console.log("AGREGANDO UN ELEMENTO");

                container_list.append(li);
            }
            container_list.append('<li role="separator" class="divider"></li>');
            container_list.append('<li><a ><strong>Total:</strong> <span id="total-cart">$ '+ String(total) +'</span></a></li>');
        }

        /*var items = document.getElementsByClassName("cart-delete-item");
        for(var i=0; i < items.length; i++){
            items[i].addEventListener("click", delete_cart_item);
        }*/
    }
}

display_cart();