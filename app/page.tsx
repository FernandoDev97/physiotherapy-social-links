import Image from "next/image";
import Link from "next/link";

const listSchedules = [
  {
    name: 'Massagem relaxante'
  },
  {
    name: 'Prev. e reab. de lesões'
  },
  {
    name: 'Limpeza de pele'
  },
  {
    name: 'Drenagem linfática'
  },
  {
    name: 'Pós cirurgico plástico'
  },
  {
    name: 'Terapia capilar'
  },
  {
    name: 'Tratamento de melasma'
  },
  {
    name: 'Tratamento de ácne'
  },
  {
    name: 'Tratamento de olheira'
  },
]


export default async function Home() {
  return (
    <>
      <div className="gap-2 flex flex-col py-6 justify-center items-center">
        <div className="w-[200px] h-[200px] border-[4px] rounded-full flex justify-center items-center border-red-100">
          <Image
            src='/profile.png'
            width={130}
            height={120}
            alt="Logo Dr Júlia"
            className="rounded-full"
          />
        </div>
          <h1 className="font-bree text-red-300 text-2xl">Dr. Julia Assunção</h1>
          <span className="font-mont uppercase text-red-300">Fisioterapeuta</span>
          <span className="text-red-300 italic">"Harmonizando Saúde e Estética."</span>
        <div className="flex flex-col gap-4 mt-4">
          {listSchedules.map(listSchedule => (
             <Link key={listSchedule.name} href={`https://api.whatsapp.com/send?phone=+5585986961652&text=Ol%C3%A1+%F0%9F%91%8B%2C+vi+o+seu+link+da+bio+e+gostaria+de+saber+mais+sobre+${listSchedule.name}`} className="border-2 uppercase font-bree transition-all rounded-2xl hover:bg-red-300 hover:text-red-50 border-red-300 p-[10px]">
              AGENDAR - {listSchedule.name}
             </Link>
          ))}
        </div>
      </div>
    </>
  )
}
