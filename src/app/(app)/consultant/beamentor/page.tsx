import BeAMentorForm from "@/components/consultant/beAMentor/beAMentorForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BeAMentor() {
  return (
    <div className="flex flex-col gap-6 min-h-screen pt-22 lg:px-30 px-8">
      <Link href="/consultant" className="para1 flex items-center gap-1"><ArrowLeft className="h-4 w-4"/>Back</Link>
      <h1 className="heading5 font-medium text-[#262525]">Be A Mentor</h1>
      <BeAMentorForm/>
    </div>
  )
}