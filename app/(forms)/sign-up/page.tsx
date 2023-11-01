import { FormLocal } from "@/components/form"


const page = () => {
  
  return (
    <div className="flex w-full  justify-center  text-light-1 items-center">
      <div className="h-auto md:w-[500px]
        bg-black rounded-md flex 
        flex-col py-5 px-6 sm:px-10 w-full
        items-center justify-center ">
        <div className="flex flex-col gap-1 mb-4 w-full items-center justify-center">
          <img src="/assets/logo.jpg" alt="" className='w-24 h-24 ' />
          <p >Welcome to Birthmate, pleasse fill the form to create an account.</p>
        </div>
        <FormLocal />
      </div>
    </div>
  )
}

export default page