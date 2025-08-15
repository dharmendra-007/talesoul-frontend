import Carousel from "@/components/(auth)/carousel"
import { carousel } from "@/constants"
import localFont from 'next/font/local'
import { cn } from "@/lib/utils"

const CabinetGrotesk = localFont({
    src: '../../fonts/CabinetGrotesk.woff2',
})

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen overflow-y-hidden">
        <div className={cn(
            "lg:container w-screen grid grid-cols-1 lg:grid-cols-2 mx-auto", CabinetGrotesk.className)}>   
            {/* Left column: carousel */}
            <div className="hidden lg:block md:p-10 h-full sticky top-0">
                <div className="h-full flex items-center justify-center">
                    <Carousel data={carousel} className="w-full h-auto" />
                </div>
            </div>

            {/* Right column: scrollable */}
            <div className="px-8 py-0 md:p-10 h-screen">
                <div className="h-full">
                {children}
                </div>
            </div>
        </div>
        </div>
    )
}