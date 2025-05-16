
    <h2>Count Occurences</h2>
    
        const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
        let count = fruits.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});
        console.log(count);

    
