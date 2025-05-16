
    <h2>Find Product By id</h2>

        function findProductById(products, id) {
            return products.find(product => product.id === id);
        }
        const products = [
            { id: 101, name: 'Laptop' },
            { id: 102, name: 'Phone' },
            { id: 103, name: 'Tablet' }
        ];

        const product = findProductById(products, 102);
        console.log(product);

    
