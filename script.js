function mincost(arr)
{ 
	 arr.sort((a, b) => a - b); // Sort once at the start
    let totalCost = 0;

    while (arr.length > 1) {
        let first = arr.shift(); // Smallest element
        let second = arr.shift(); // Second smallest element
        let cost = first + second;
        totalCost += cost;

        arr.push(cost); // Add combined rope back
        arr.sort((a, b) => a - b); // Sort again
    }

    return totalCost;

  
}

module.exports=mincost;
