import SignInForm from "@/components/(auth)/signinForm";

export default function SignIn() {
  return (
    <div className="w-full h-full flex">
      <div className="flex flex-col [@media(min-height:600px)]:justify-center md:w-4/6 h-screen md:h-auto mx-auto gap-4 sm:gap-6 overflow-y-auto md:overflow-visible py-10">
        <div className="flex flex-col gap-2">
          <h1 className="sr-only">Sign In</h1>
          <span className="text-3xl font-bold text-[#D96F62]">Welcome Back 👋</span>
          <span className="md:text-lg">
            We&apos;re glad you&apos;re here. Step back into your safe space — to feel, reflect, and grow at your pace.
          </span>
        </div>
        <SignInForm />
        <span className="text-center text-[#3A3A3A] text-[1rem] font-[400]">&copy; 2025 All right reserved.</span>
      </div>
    </div>
  )
}