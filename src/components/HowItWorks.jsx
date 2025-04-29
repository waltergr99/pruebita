"use client";

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">¿Cómo funciona?</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        <div className="p-6">
          <h3 className="font-semibold mb-2">1. Regístrate</h3>
          <p>Crea tu cuenta en minutos.</p>
        </div>
        <div className="p-6">
          <h3 className="font-semibold mb-2">2. Realiza tu cambio</h3>
          <p>Envía tus soles y recibe dólares (o viceversa).</p>
        </div>
        <div className="p-6">
          <h3 className="font-semibold mb-2">3. Recibe tu dinero</h3>
          <p>Transferimos a tu cuenta bancaria.</p>
        </div>
      </div>
    </section>
  );
}