"use client";
import { useState } from 'react';

export default function Hero() {
  const [amount, setAmount] = useState(1000);
  const exchangeRate = 3.68;
  const usd = (amount / exchangeRate).toFixed(2);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center pt-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          La casa de cambio online líder del Perú
        </h1>
        <p className="text-lg">
          Cambia tu dinero fácil, seguro y rápido. Más de 6 mil millones de dólares cambiados.
        </p>
      </div>
      <div className="flex-1 bg-white rounded-xl p-8 shadow-lg max-w-md w-full text-gray-800 mt-10 md:mt-0">
        <h2 className="text-xl font-bold mb-4">Calculadora de cambio</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Monto en Soles"
        />
        <div className="text-center text-lg mb-4">
          <p>Recibirás: <strong>${usd} USD</strong></p>
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
          ¡Regístrate!
        </button>
      </div>
    </section>
  );
}