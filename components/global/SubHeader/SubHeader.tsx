
const Subheader = ({text, className}:{text:string, className?:string}) => {
    return (
      <div>
        <h2 className={`text-[#D8EFE9] text-2xl font-normal ${className}`}>{text}</h2>
      </div>
    )
  }
  
  export default Subheader
  