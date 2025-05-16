
<h2>Group by Property</h2>

function groupBy(array, property) {
    return array.reduce((acc, curr) => {
        //Get the value of the property
        const key = curr[property];

        // Initialize the array for this key if it doesn't exist
        if (!acc[key]) {
            acc[key] = [];
        }
        //Push the current object into the array for this key
        acc[key].push(curr);

        return acc;
    }, {});
}
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 22 }
];
const groupByDetails = groupBy(people, 'age');
console.log(groupByDetails);
