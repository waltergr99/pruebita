"use client";

export default function Testimonials() {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Nuestros clientes nos aman</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p>"Excelente servicio, seguro y rápido."</p>
          <span className="block mt-4 font-semibold">María P.</span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p>"El mejor tipo de cambio que he encontrado."</p>
          <span className="block mt-4 font-semibold">José R.</span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p>"Me atendieron súper bien, muy recomendado."</p>
          <span className="block mt-4 font-semibold">Ana G.</span>
        </div>
      </div>
    </section>
  );
}