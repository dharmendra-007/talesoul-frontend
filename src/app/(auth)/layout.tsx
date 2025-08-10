export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
   return ( <>
        <div className="w-screen grid grid-cols-2 min-h-screen gap-4 p-10">
            <div className="w-full h-full bg-amber-800"></div>
            {children}
        </div>
    </>)
}