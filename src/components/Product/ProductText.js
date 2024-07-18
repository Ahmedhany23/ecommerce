export default function ProductText({ products }) {


  return (
    <div className="py-20">
      {products && 
          <>
          <h1 className="text-ltext text-xl font-semibold ">{products.attributes.title}</h1>
          <p className="text-ltext max-w-lg text-lg py-5">{products.attributes.description}</p>
          <p className="text-ltext text-lg">Price: <span className="font-bold">EGP {products.attributes.price}</span></p>
          <button className="mt-10 w-56 bg-lsecondary  py-3 text-white text-lg hover:bg-laccent">Add to Cart</button>
          </>
        
    
      }
    </div>
  );
}