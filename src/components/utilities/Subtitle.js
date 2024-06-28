

export default function Subtitle({title,btnTitle}) {
  return (
   <div className="flex justify-between pt-4 px-2">
    <p className="dark:text-white text-xl ">{title}</p>
    {btnTitle && (<div className="dark:text-white rounded-2xl hover:bg-white duration-200 hover:text-slate-900 border p-2 cursor-pointer">{btnTitle}</div>)}
   </div>
  )
}
