
    <h2>Find First Even Numbers</h2>
    
        function findFirstEvenNumbers(Numbers){
            return Numbers.find(num => num % 2 === 0);
        }
        const inputArray = [1, 3, 7, 10, 2];

        const firstEvenNumbers = findFirstEvenNumbers(inputArray);
        console.log(firstEvenNumbers);
        
    
