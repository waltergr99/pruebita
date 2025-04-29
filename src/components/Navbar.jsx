"use client";
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between p-6 bg-blue-900 text-white fixed top-0 z-50">
      <div className="flex items-center space-x-3">
        <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
        <span className="font-bold text-2xl">Rextie</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <a href="#">Personas</a>
        <a href="#">Empresas</a>
        <a href="#">Nosotros</a>
        <a href="#">Blog</a>
        <a href="#">Servicios</a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hover:underline">Iniciar sesión</button>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Regístrate</button>
      </div>
    </nav>
  );
}