"use client";

export default function Benefits() {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-10">¿Por qué cambiar con nosotros?</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Mejor tipo de cambio</h3>
          <p>Ahorra más en cada operación.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Seguridad garantizada</h3>
          <p>Tus fondos protegidos en todo momento.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Atención personalizada</h3>
          <p>Te ayudamos en cada paso.</p>
        </div>
      </div>
    </section>
  );
}