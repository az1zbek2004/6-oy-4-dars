function getValue() {
     let data = [];
    if (localStorage.getItem("value")) {
      data = JSON.parse(localStorage.getItem("value"));
    }

    return data;
}
function validate(arg) {

    if (arg.length < 3) {
        alert("Task 3ta harfdan ko'proq yozizlishi kerak");
        return false;
    }

     return true;
}

export {getValue, validate}