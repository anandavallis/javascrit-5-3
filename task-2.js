
    <h2>Flatten Array</h2>
    
        function flattenArray(numbers){
            return numbers.reduce((flat , current) =>{
                    return flat.concat(current);
            }, []);
        }
        const input = [[1, 2, 3], [4, 5], [6, 7, 8, 9]];
        const output = flattenArray(input);
        console.log(output);
        
   
