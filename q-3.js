
function validateUsername(name) {
    if (name.length < 4) {
        return "Too Short";
    }  if (name.includes(" ")) {
        return "No Space Allowed";
    } if (name.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}
console.log(validateUsername("Billu123"));