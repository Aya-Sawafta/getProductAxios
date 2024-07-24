const getProductsData= async()=>{
    const {data} = await axios.get("https://dummyjson.com/products")
    return data;
}


const getSpecificProduct= async()=>{
    const data = await getProductsData();
    const products = data.products;
    const result  = products.map((product)=>{
        return `
        <div class="product">
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}">
        <a href="details.html?id=${product.id}">Details<a/>
        </div>`;
    }).join(" ");
    document.querySelector(".products").innerHTML= result;
}

getSpecificProduct()
