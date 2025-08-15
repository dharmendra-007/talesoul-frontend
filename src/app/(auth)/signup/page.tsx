import SignUpForm from "@/components/(auth)/signupForm";

export default function SignUp() {
  return (
    <div className="w-full h-full flex overflow-y-auto rounded-2xl lg:bg-amber-50 ">
      <div className="flex flex-col md:w-4/6 h-screen md:h-auto mx-auto gap-4 sm:gap-6 overflow-y-auto md:overflow-visible py-10 md:py-4">
        <div className="flex flex-col gap-2">
          <h1 className="sr-only">Sign In</h1>
          <span className="text-3xl font-bold text-[#2B2321] p-2 bg-gradient-to-r from-[#fdbb74] to-[#f2e4f6] w-fit rounded-sm">TaleSoul</span>
          <span className="text-[#A7A7A5] text-[1rem] font-bold">Every Soul has a Story</span>
        </div>
        <SignUpForm />
        <span className="text-center text-[#3A3A3A] text-[1rem] font-[400]">&copy; 2025 All right reserved.</span>
      </div>
    </div>
  )
}