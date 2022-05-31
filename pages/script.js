document.querySelector('.greet-btn').addEventListener('click', greeting);

function greeting(){
    const userinput = document.getElementById('username').value;
    document.querySelector('.greeting').textContent = "Hello " + userinput;
}