document.getElementById("hi").onclick = () => {
    let d = document.getElementById("container");
    let p = document.createElement("div");

    fetch("js.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(user => {
                let p = document.createElement("div");
                p.textContent = `Here is id ${user.id} here is name ${user.name} here is and email ${user.email} age is  ${user.age}`;  
                d.appendChild(p); 
            });
        })
        .catch(error => console.error('Error fetching data:', error));  // Optional: Handle fetch errors
};
