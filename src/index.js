console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = "https://dog.ceo/api/breeds/list/all";

window.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        data.message.forEach((imageUrl) => {
            const img = document.createElement("img");
            img.src = imageUrl;
            document.body.appendChild(img);
        });
    })
    const ul = document.getElementById("dog-breeds");
})

/*window.addEventListener("DOMContentLoaded", () => {
    fetch(breedUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const ul = document.getElementById("dog-breeds");
        Object.keys(data.message.forEach((breed) => {
            const li = document.createElement("li");
            li.textContent = breedUrl.appendChild(li);
        }));
    })
})*/

/*  window.add
    Object.keys(data.message).forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        ul.appendChild(li);
    });
})*/

/*const container = document.querySelector("#image-container");

fetch(imgUrl)
  .then((response) => response.json())
  .then((data) => {
    data.message.forEach((imageUrl) => {
        const img = document.createElement("img");

        img.src = imageUrl;

        div.appendChild(img);
    });
});*/


// onDOMContentLoaded = (event) => { };

window.addEventListener("DOMContentLoaded", () => {
   
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
       
       return response.json();
      })
      .then((data) => {
      
        console.log(data);
    
        const ul = document.getElementById("dog-breeds");
      
        Object.keys(data.message).forEach((breed) => {
          const li = document.createElement("li");
          li.textContent = breed;
          ul.appendChild(li);
          li.addEventListener("click", () => {
            li.style.color = "purple";
          })
        });
      });
      const select = document.getElementById("breed-dropdown");
    
    select.addEventListener("change", () => {
      
      const selectedValue = select.value;
     
      const lis = ul.getElementsByTagName("li");
      for (let i = 0; i < lis.length; i++) {
        const li = lis[i];
        const breed = li.textContent;
        if (selectedValue === "" || breed.startsWith(selectedValue)) {
          li.style.display = "list-item";
        } else {
          li.style.display = "none";
        }
      }
    });
  });

  /*const select = document.getElementById("breed-dropdown");
  select.addEventListener("change", () => {
    const selectedValue = select.ariaValueMax;
    const lis = ul.getElementsByTagName("li");
    for (let i = 0; i < list.length; i++) {
        const li = lis[i];
        const breed = li.textContent;
        if (selectedValue === "" || breed.startsWith(selectedValue)) {
            li.style.display = "list-item";
        } else {
            li.style.display = "none";
        }
        }
    })*/

    