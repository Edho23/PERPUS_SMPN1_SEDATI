"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({username, password}),
      })

      if (response.ok) {
        router.push('/dashboard')
      } else {
        const data = await response.json()
        setError(data.message || "Username atau Password salah")
      }
    } catch (error) {
      setError("Gagal terhubung ke server coba lagi nanti")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative h-screen bg-[#56ADF7] flex items-center justify-center p-4 overflow-hidden">

      <Image
        src={"/images/Vector.png"}
        width={400}
        height={400}
        alt=""
        className="absolute top-0 right-0 z-0 opacity-43 translate-x-1/2 -translate-y-1/2"
      />
      <Image
        src={"/images/Vector.png"}
        width={400}
        height={400}
        alt=""
        className="absolute bottom-0 left-0 y-0 opacity-43 -translate-x-1/2 translate-y-1/2"
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-1">
          <div className="flex justify-center items-center">
            <Image 
              src="/images/logo.png" 
              width={150} 
              height={150} 
              alt="" 
            />
          </div>
          <div className="text-center space-y-2">
            <p className="text-muted-foreground p-4">
              Masukkan username dan password untuk mengakses sistem
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <div className="relative flex items-center">
                <User className="absolute left-3 text-gray-400" size={20}/>
                <Input
                  id="username"
                  type="text"
                  placeholder="Masukan Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3 text-gray-400" size={20}/>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  placeholder="Masukan Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full text-white rounded-3xl bg-[#56ADF7]"
            >
              {isLoading ?'Memproses...' : 'Masuk'}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
