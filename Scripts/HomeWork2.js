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

function solution2(S){

	var balancerStack = [];
	var ArrayS = S.split("");
	var result = true;
	
	for (i = 0; i < ArrayS.length; i++) { 
		if ((ArrayS[i] === "[") || (ArrayS[i] === "{") || (ArrayS[i] === "(") ){
			balancerStack.push(ArrayS[i])
		};

		if (ArrayS[i] === "]"){
			if (!(balancerStack.pop() === "[")){				
				result = false;
				break;
			}	
		}
		
		if (ArrayS[i] === "}"){
			if (!(balancerStack.pop() === "{")){				
				result = false;
				break;
			}
		}
		
		if (ArrayS[i] === ")"){
			if (!(balancerStack.pop() === "(")){				
				result = false;
				break;
			}
		}
	}
		
	if (balancerStack.length > 0){
		result = false;
	}
	
	return result;
}

function solution3(A, F){

	regexpForArg = /(\(?)(\w*)(\)?)(?=\=>)/;
	regexpForBody = /(\=>)(.+$)/;

	functionArg = regexpForArg.exec(F);
	functionBody = regexpForBody.exec(F);

	var f1 = new Function(functionArg[2],"return " + functionBody[2]);		
	
	return A.map(f1);
}