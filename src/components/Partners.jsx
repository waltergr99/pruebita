"use client";
import Image from 'next/image';

export default function Partners() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-bold mb-6">Con la confianza de</h2>
      <div className="flex justify-center items-center gap-10 flex-wrap">
        <Image src="/images/partner1.svg" alt="Partner 1" width={100} height={40} />
        <Image src="/images/partner2.svg" alt="Partner 2" width={100} height={40} />
        <Image src="/images/partner3.svg" alt="Partner 3" width={100} height={40} />
      </div>
    </section>
  );
}