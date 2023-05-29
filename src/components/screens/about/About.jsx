import Layout from "@/components/layout/Layout";
import ScreensNav from "../nav/ScreensNav";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <Layout title="About" description="Shop about, Womazing">
      <div className="pt-[100px]">
        <div className="text-4xl mb-[25px] font-semibold">About</div>
        <ScreensNav page="About" />
      </div>
      <div className="grid px-[25px] grid-cols-2 justify-center items-center gap-10">
        <Image
          className="w-[70%] h-auto] justify-self-center"
          src="/about/img1.png"
          alt="img"
          width={442}
          height={547}
          sizes="100vw"
        />
        <div>
          <span className="text-3xl block mb-[50px]">Идея и женщина</span>
          <span>
            Womazing была основана в 2010-ом и стала одной из самых успешных
            компаний нашей страны. Как и многие итальянские фирмы, Womazing
            остаётся семейной компанией, хотя ни один из членов семьи не
            является модельером. Мы действуем по успешной формуле, прибегая к
            услугам известных модельеров для создания своих коллекций. Этот
            метод был описан критиком моды Колином Макдауэллом как форма
            дизайнерского со-творчества, характерная для ряда итальянских
            prêt-a-porter компаний.
          </span>
        </div>
        <div>
          <span className="text-3xl block mb-[50px]">Магия в деталях</span>
          <span>
            Первый магазин Womazing был открыт в маленьком городке на севере
            страны в 2010-ом году. Первая коллекция состояла из двух пальто и
            костюма, которые были копиями парижских моделей. Несмотря на то, что
            по образованию основательница была адвокатом, ее семья всегда была
            тесно связана с шитьём (прабабушка основательницы шила одежду для
            женщин, а мать основала профессиональную школу кроя и шитья).
            Стремление производить одежду для масс несло в себе большие
            перспективы, особенно в то время, когда высокая мода по-прежнему
            доминировала, а рынка качественного prêt-a-porter попросту не
            существовало.
          </span>
        </div>
        <Image
          className="w-[70%] h-auto] justify-self-center"
          src="/about/img2.png"
          alt="img"
          width={442}
          height={547}
          sizes="100vw"
        />
      </div>
      <div className="flex justify-center">
        <Link
          href="/shop"
          className="flex items-center justify-center px-10 py-3 w-fit rounded-md bg-red-400 hover:bg-red-500 text-white font-medium transition-all"
        >
          Go to Shop
        </Link>
      </div>
    </Layout>
  );
};
export default About;
