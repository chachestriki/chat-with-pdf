import { Button } from "@/components/ui/button";
import { UserButton,auth } from "@clerk/nextjs";
import { Heading1 } from "lucide-react";
import Link from "next/link";
import {LogIn} from 'lucide-react'

export default async function Home() {
  const {userId} = await auth()
  const isAuth = !!userId
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chatea con tu PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Ir al Chat</Button>}
          </div>
          <p className="max-w-xl mt-1 text-lg">
            Únete a millones de estudiantes, investigadores y 
            profesionales para responder a tus preguntas con IA.
          </p>
          <div className="w-full mt-4">
            {isAuth ? (<h1>fileupload</h1>):(
              <Link href="/sign-in">
                <Button>
                  ¡Inicia sesión para empezar!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
    )
}