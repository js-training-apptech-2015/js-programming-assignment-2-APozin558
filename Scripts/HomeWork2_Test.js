// Task 1
solution1_actual_result = solution1([1,2,4,6]);
solution1_expected_result = 3;
console.log("Task 1. Test 1: A = [1,2,4,6] missed value is 3")
testExt(solution1_actual_result, solution1_expected_result);

solution1_actual_result = solution1([-2,1,2,4,6]);
solution1_expected_result = 3;
console.log("Task 1. Test 2: A = [-2,1,2,4,6] missed value is 3")
testExt(solution1_actual_result, solution1_expected_result);

solution1_actual_result = solution1([-2,2,4,6]);
solution1_expected_result = 1;
console.log("Task 1. Test 3: A = [-2,2,4,6] missed value is 1")
testExt(solution1_actual_result, solution1_expected_result);


// Task 2. 
solution2_actual_result = solution2("");
solution2_expected_result = true;
console.log("Task 2. Test 1: '' result: true")
testExt(solution2_actual_result, solution2_expected_result);

solution2_actual_result = solution2("[(A)]");
solution2_expected_result = true;
console.log("Task 2. Test 2: '[(A)]' result should be true")
testExt(solution2_actual_result, solution2_expected_result);

solution2_actual_result = solution2("[A](B){C}");
solution2_expected_result = true;
console.log("Task 2. Test 3: '[A](B){C}' result should be true")
testExt(solution2_actual_result, solution2_expected_result);

solution2_actual_result = solution2("][");
solution2_expected_result = false;
console.log("Task 2. Test 4: '][' result should be false")
testExt(solution2_actual_result, solution2_expected_result);

solution2_actual_result = solution2("[(])");
solution2_expected_result = false;
console.log("Task 2. Test 5: '[(])' result should be false")
testExt(solution2_actual_result, solution2_expected_result);

// Task 3 
solution3_actual_result = solution3([1,2,3],"(a)=>a*2");
solution3_expected_result = [2,4,6];
console.log("Task 3. Test 1: '([1,2,3], '(a)=>a*2')' result: [2,4,6]")
testExt(solution3_actual_result.toString(), solution3_expected_result.toString());

solution3_actual_result = solution3([1,2,3],"(a)=>a+2");
solution3_expected_result = [3,4,5];
console.log("Task 3. Test 2: '([1,2,3], '(a)=>a+2')' result: [3,4,5]")
testExt(solution3_actual_result.toString(), solution3_expected_result.toString());

solution3_actual_result = solution3([1,2,3],"()=>1");
solution3_expected_result = [1,1,1];
console.log("Task 3. Test 3: '([1,2,3], '()=>1')' result: [1,1,1]")
testExt(solution3_actual_result.toString(), solution3_expected_result.toString());
