const TEST = "Let ([~variable1=one;~variable2=two];JSONSetElement(\"\";[\"key1\" ; \"value1\" ; JSONString];[\"key2\" ; \"value2\" ; JSONString]))"

console.log(TEST)

    /* Check for:
        parenthesis
        square brackets
        quotes
        semicolons
        ampersands
        math operators
    */
const characters_opening = ["(", "["];
const characters_closing = [")", "]"]; 

let function_to_format = TEST; 

let p_index_first = function_to_format.indexOf("(");
let p_index_last = function_to_format.lastIndexOf(")");

let function_name = function_to_format.slice(0, p_index_first).trim();

let function_parameters = function_to_format.slice(p_index_first + 1, p_index_last - 1);

console.log("name:" + function_name + "\nparameters:" + function_parameters);