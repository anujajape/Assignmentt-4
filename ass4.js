// Array of names
var names = ["John", "Jane", "Bob", "Alice", "Jack"];

// Loop over each name in the array
for (var i = 0; i < names.length; i++) {
    // Get the current name
    var name = names[i];

    // Check if the name starts with "J" or "j"
    if (name.charAt(0) === "J" || name.charAt(0) === "j") {
        // Print "Goodbye" followed by the name
        console.log("Goodbye " + name);
    } else {
        // Print "Hello" followed by the name
        console.log("Hello " + name);
    }
}
