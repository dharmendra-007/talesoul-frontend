import SignUpForm from "@/components/(auth)/signupForm";

export default function SignUp() {
  return (
    <div className="w-full h-full flex overflow-y-auto rounded-2xl">
      <div className="flex flex-col md:w-5/6 h-screen md:h-auto mx-auto gap-4 sm:gap-6 overflow-y-auto md:overflow-visible py-10 md:py-4">
        <div className="flex flex-col gap-2">
          <h1 className="sr-only">Sign Up</h1>
          <span className="text-primary font-medium text-[34px] md:text-[44px] ">Join With Your Soul</span>
          <span className="para1">We&apos;re glad you&apos;re here. Step back into your safe space — to feel, reflect, and grow at your pace.</span>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}