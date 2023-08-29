const name = document.getElementById('name');
const comment = document.getElementById('comment');
const male = document.getElementById('male');
let radios = document.getElementsByName("gen");
let formValid = false;

function checker() {
    if(!name.value.trim().length){
        alert("All fields are compulsory");
        name.focus();
        return false;
    }
    else if(!comment.value.trim().length){
        alert("All fields are compulsory");
        comment.focus();
        return false;
    }
    else{
        var i = 0;
        while (!formValid && i < radios.length) {
            if (radios[i].checked) {
                formValid = true;
                break;
            }
            i++;        
        }

        if (!formValid){
            alert("All fields are compulsory");
            male.focus();
            return false;   
        } 
    }
    return true;
}
