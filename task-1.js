
    <h2>Longest String</h2>
    
        function longString(arr){
            return arr.reduce((longest , current) => {
                return current.length > longest.length ? current : longest;
            }); 
        }
        const input = ['apple', 'banana', 'cherry', 'date'] ;
        const output = longString(input);
        console.log(output);
        
   
