const getSpecificProduct= async ()=>{
  const  params= new URLSearchParams(window.location.search)
   const id = params.get('id');
   console.log(id)
    const {data}= await axios.get(`https://dummyjson.com/products/${id}`);

   
  return data;
}

 const getProductDetails = async ()=>{
    const details = await getSpecificProduct();
    const imagesDetails= details.images.map((image)=>{
        return `
        <img src="${image}" width="20%"/>
        `
    }).join(" ");
     const ProductDetails= `
     <h2> ${details.title}</h2>
     <p>${details.description}<p/>
     <p>${details.price}<p/>
    ` ;
    document.querySelector(".details").innerHTML+=ProductDetails;
    document.querySelector(".productImage").innerHTML=imagesDetails;
 }

getProductDetails();