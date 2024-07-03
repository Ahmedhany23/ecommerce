export default function ProductText({ products }) {


  return (
    <div className="py-20">
      {products && products.map((product) => (
        <div key={product.id}>
          <h1 className="text-ltext text-xl font-semibold ">{product.attributes.title}</h1>
          <p className="text-ltext max-w-lg text-lg py-5">{product.attributes.description}</p>
          <p className="text-ltext text-lg">Price: <span className="font-bold">EGP {product.attributes.price}</span></p>
          <button className="mt-10 w-56 bg-lsecondary  py-3 text-white text-lg hover:bg-laccent">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}