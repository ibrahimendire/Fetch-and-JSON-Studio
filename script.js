// TODO: add code here
window.addEventListener("load", function () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function (response) {
      return response.json();
    }).then(function (json) {
      const div = document.getElementById("container");
      let result = `<p>NumberOfAstronauts: ${json.length}</p>`;

      json.sort(function (a, b) {
        return b.hoursInSpace - a.hoursInSpace;
      })
      
      json.forEach(function (astro) {
         
        result += `<div class="astronaut">
   <div class = "bio">
      <h3>${astro.firstName} ${astro.lastName}</h3>
      <ul>
         <li>Hours in space: ${astro.hoursInSpace}</li>
         <li>Active: ${astro.active}</li>
         <li>Skills: ${astro.skills.join(",")}</li>
      </ul>
   </div>
   <img class="avatar" src="${astro.picture}">
</div>
`;
        div.innerHTML = result;
      });
    });
});


//if(${astro.active}==='true'){ style="color:green"} else{${astro.active} style="color:red"}


