import { supabase } from "@/lib/supabase/supabaseClient";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST (request : Request) {
  try {
    const {username, password: plainTextPassword} = await request.json()

    const { data: admin, error: adminError} = await supabase
    .from ('admin')
    .select('password')
    .eq('username', username)
    .single()

    if (adminError || !admin) {
      return NextResponse.json({message: 'Username atau Password salah'}, {status: 401})
    }
    const storedHash = admin.password
    const passwordsMatch = await bcrypt.compare(plainTextPassword, storedHash)

    if (passwordsMatch) {
      return NextResponse.json({message: 'login berhasil'},{status: 200})
    } else {
      return NextResponse.json({message: 'Username atau Password salah'}, {status: 401})
    }
  } catch (error) {
    return NextResponse.json({message: 'Terjadi kesalahan internal server'}, {status: 500})
  }
}
