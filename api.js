const ctx = {
    "accounts": [
        "name": "peter",
        "email": "peter@mit.edu",
        "balance": 0,
        "password": "secret",

    ]
};

function create(){
    const name = document.getElementbyId("name");
    const email = document.getElementbyId("email");
    const password = document.getElementbyId("password");
    const status = document.getElementbyId("createStatus");

    ctx.accounts.push(
        {
            name: name.value,
            email: email.value,
            password: password.value,
            balance: 0
        }
    )
    name.value = '';
    email.value = '';
    password.value = '';
    status.innerHTML = 'Account Created';
};

export default create;
