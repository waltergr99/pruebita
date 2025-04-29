"use client";

export default function Testimonials() {
  return (
    <section className="py-16 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Descubre lo que dicen nuestros clientes</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p>“Muy buena APP, sencilla de usar y muy buenos precios de venta y compra del dólar.”“Muy buena APP, sencilla de usar y muy buenos precios de venta y compra del dólar.”</p>
          <span className="block mt-4 font-semibold">Reni Ravina</span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p>“Mi experiencia al usar la aplicación fue estupenda,
             es sencilla, transparente en las tasas de cambio, ahorré tiempo. La mejor que he usado.”</p>
          <span className="block mt-4 font-semibold">Chanel Ramos</span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p>“La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. 
            Me llaman incluso cuando pasó algún error y lo solucionan rápido”.</p>
          <span className="block mt-4 font-semibold">Antonelly</span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <p>“Hasta el momento estoy muy contento con el servicio brindado por Rextie. 
            Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo”.L</p>
          <span className="block mt-4 font-semibold">Jorge Suarez</span>
        </div>
      </div>
    </section>
  );
}