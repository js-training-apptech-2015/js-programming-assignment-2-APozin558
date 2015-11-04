function test(result, ErrorMessage){
	if(result === false){
		console.log(ErrorMessage)
	} else {
		console.log("Test passed");
	}
}

function testExt(actualResult, expectedResult){
	if(actualResult === expectedResult){
		console.log("Test passed")
	} else {
		console.log("Test failed. Expected result: " + expectedResult + ", Actual result: " + actualResult);
	}
}