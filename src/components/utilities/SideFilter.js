export default function SideFilter({title}) {
  return (
    <div className="flex flex-col py-10">
      <div className="category text-white flex flex-col gap-2">
      <h4 className="text-2xl pb-3 font-semibold">Category</h4>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" /> <p>All</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" /> <p>Clothes</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" /> <p>Beauty</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" /> <p>Laptops</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" /> <p>Sale</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" /> <p>Kitchen</p>
        </div>
      </div>
      <div className="category text-white flex flex-col gap-2 py-7">
      <h4 className="text-2xl pb-3 font-semibold">Brand</h4>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" /> <p>All</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" /> <p>Apple</p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" /> <p>Samsung</p>
        </div>
      </div>
      <div className=" text-white flex flex-col gap-2 py-7">
      <h4 className="text-2xl pb-3 font-semibold">Price</h4>
        <div className="flex gap-2">
         <p>From</p> <input type="number" name="" id=""  className="w-20"/> 
        </div>
        <div className="flex gap-[26px]">
         <p>To</p> <input type="number" name="" id=""  className="w-20"/> 
        </div>
        
      </div>
    </div>
  );
}
