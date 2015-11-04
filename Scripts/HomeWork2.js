/*
Task 1

Write a function
function solution1(A);
that given an array A returns a minimal positive integer not present in the array.
*/
function solution1(A){

	var result = false;
	
	A.sort(function(a, b){return a-b});

	A.every(function(element1,index1,array1){
		if ((index1 + 1) !== array1.length){			
			var nextElement = array1[index1+1];
			
			if (nextElement > 0){
				if ((element1 < 0) && (nextElement > 1)){
					result = 1;
					return false;					
				} else if ((element1 > 0) && ((element1 + 1) !== nextElement)){							
					result = element1 + 1;
					return false;
				} else {
					return true;
				}										
			} else {
				return true;
			}			
		}		
	})
	
	return result;
}



/*
Task 2

Write a function
function solution2(S);

that given a string S returns a boolean indicating if the string is bracket balanced
*/

function solution2(S){

	var balancerStack = [];
	var ArrayS = S.split("");
	var result = true;
	
	ArrayS.forEach(function(element1,index1,array1){     
		if ((element1 === "[") || (element1 === "{") || (element1 === "(") ){
			balancerStack.push(element1)
		};

		if (element1 === "]"){
			if (!(balancerStack.pop() === "[")){				
				result = false;
				return false;
			}	
		}
		
		if (element1 === "}"){
			if (!(balancerStack.pop() === "{")){				
				result = false;
				return false;
			}
		}
		
		if (element1 === ")"){
			if (!(balancerStack.pop() === "(")){				
				result = false;
				return false;
			}
		}
	})
	
	if (balancerStack.length > 0){
		result = false;
	}
	
	return result;
}

