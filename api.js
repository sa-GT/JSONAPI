document.getElementById("hi").onclick = async () => {
    var response = await fetch("https://api.npoint.io/ffcaae6c39c8c15c3f03");
    var data = await response.json();
    let d = document.getElementById("container");

    for (const ap of data) {
        let pss = document.createElement("div");
        pss.innerHTML = `
            ${ap.id} <br>
            ${ap.name}
            ${ap.email}
            ${ap.age}
        `;
        d.appendChild(pss);
    }
};
