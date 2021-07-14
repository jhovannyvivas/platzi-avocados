/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/


console.log('Happy hacking :)')

const appNode = document.querySelector('#app')
const url = "https://platzi-avo.vercel.app/api/avo";
const urlBase = "https://platzi-avo.vercel.app"

const formatPrice = (price) => {
 const newPrice = window.Intl.NumberFormat('en', {
      style: "currency",
      currency: "COP"
  }).format(price);
    return newPrice;
};
//web api
//conectarnos al server
//procedar la respuesta, convertirla en Json
//JSON -> Data -> Renderizar info browser
window
.fetch(`${urlBase}/api/avo`)
.then((respuestra) => respuestra.json())
.then(responseJson => {

    const todosLosItems = [];
    responseJson.data.forEach(item => {
        
        console.log(item.name);
        //crear imagen
        const imagen = document.createElement('img')
        imagen.className = "mx-auto"
        //url de la imagen
        imagen.src = `${urlBase}${item.image}`;
        
        //precio
        const text = document.createElement("div")
        text.className = "nombre-precio mb-10 flex-row justify-center flex"
        const price = document.createElement("p");
        price.className = "nombre-precio mr-6"
        price.innerText  = formatPrice(item.price);
        text.append(price);

        //titulo
        const title = document.createElement("h2")
        title.textContent = item.name;
        title.className = "inline text-2xl text-black bg-white";
        text.appendChild(title);
        


        const container = document.createElement("div")
        container.className = "shadow-inner bg-white items-center";
        const salto = document.createElement("br");
        container.appendChild(imagen)
        container.appendChild(salto);
        container.append(text);
        todosLosItems.push(container);
        
    });
    appNode.append(...todosLosItems);
})
