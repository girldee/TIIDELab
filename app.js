//1. API Url 
const url = "https://jsonplaceholder.typicode.com/users";

//2. Fetch users from the API url
function fetchUsers() {
    //2.1 Make use of the browser fetch API
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            // 2.2 Parsing the user data to the  renderUsers function
            renderUsers(data);
    });
}

//3. Render the users in the DOM
function renderUsers(userData) {
    console.log(userData);
    const ul = document.getElementById("user-list-container");
    // console.log(ul);

    //3.1 Render an li tag for each of the users
    userData.forEach((user, index) => {
        console.log(user, index);
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username">${user.username}</span>
        `;
        //3.2 Append the current user li tag to the ul tag
        ul.appendChild(li);
    });
}

//4. Add a search funtion to the DOM
function searchUsersByUsername(){
        const input = document.getElementById("search");
        const ul = document.getElementById("user-list-container");
        const inputValue = input.value.toUpperCase();
        const userList = ul.querySelectorAll("li"); // array of all  the li tags []


        //4.1 Loop through all the usersand render the ones that match the search
        for(let index = 0; index < userList.length; index++) {
            const usernameSpanTag = userList[index].querySelector(".username");
            const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
            const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

            if(isMatch) {
                userList[index].style.display = "block";
            }else{
                userList[index].style.display = "none";
            }
            }
}


//5. Calling fetch function
fetchUsers();