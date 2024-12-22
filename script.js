function mincost(arr)
{ 
	arr.sort();
	let mincost=0;
	let sum=0;
	for(let i=0;i<n-1;i++){
		mincost=mincost+arr[i]+arr[i+1];
		sum=arr[i]+arr[i+1];
		arr.push(sum);
		arr.sort();
	    }
	return mincost;
	
//write your code here
// return the min cost
  
}

module.exports=mincost;
