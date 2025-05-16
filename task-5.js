
    <h2>Total Price of items in Cart</h2>
    
        function calculateTotal(cart) {
            return cart.reduce((total, currentItems) => {
                return total + currentItems.price;
            }, 0);

        }
        const cart = [
            { item: 'apple', price: 1.5 },
            { item: 'banana', price: 2.0 },
            { item: 'orange', price: 1.25 }
        ];

        const totalPrice = calculateTotal(cart);
        console.log(totalPrice);
