import LoginForm from "@/components/(auth)/login";
import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-full flex">
      <div className="absolute hidden md:block">
        <span className="flex justify-center items-center gap-2">
        <Image
          src="/images/logo.svg"
          height={25}
          width={30}
          alt="logo"
        />
        <span className="text-[1.3rem] font-semibold text-primary">TaleSoul</span>
        </span>
      </div>
      <div className="flex flex-col [@media(min-height:600px)]:justify-center md:w-5/6 h-screen md:h-auto mx-auto gap-4 sm:gap-6 overflow-y-auto md:overflow-visible py-10">
        <div className="flex flex-col gap-2">
          <h1 className="sr-only">login</h1>
          <span className="text-3xl font-medium text-primary">Welcome Back 👋</span>
          <span className="para1">
            We&apos;re glad you&apos;re here. Step back into your safe space — to feel, reflect, and grow at your pace.
          </span>
        </div>
        <LoginForm />
        <span className="text-center caption">&copy; 2025 All right reserved.</span>
      </div>
    </div>
  )
}