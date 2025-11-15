import Image from "next/image"

const ProcessCard = ({image , title , description , style = ""} : {
  image : string,
  title : string,
  description : string,
  style : string
}) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='size-20 flex justify-center items-center bg-[#C9C9C9] rounded-full z-10 object-contain'>
        <Image
        src={image}
        height={30}
        width={30}
        alt='icon'
        className={style}
        />
      </div>
      <span className='para2 text-center !font-semibold'>{title}</span>
      <span className='para2 text-center md:text-justify w-[80vw] md:max-w-[15vw]'>
        {description}
      </span>
    </div>
  )
}

export default ProcessCard