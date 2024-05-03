import Header from "./components/Header/Header";
import LeftTextrightImg from "./components/LeftTextrightImg/LeftTextrightImg";
import Dino from "./components/img/dino.svg";
import redBike from "./components/img/redBike.svg";
import bikes from "./components/img/bikes.svg"
import MiddleText from "./components/MiddleText/MiddleText";
import ColorBlock from "./components/ColorBlock/ColorBlock";
import LeftImgrightText from "./components/LeftImgrightText/LeftImgrightText";
function App() {
  return (
    <>
      <Header />
      <LeftTextrightImg
        color="#f4f9e1"
        heading="Веломастерская 'Велозар'"
        text="Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды."
        image={Dino}
      />
      <LeftTextrightImg
       color="#a3ffff"
        heading="Что мы предлагаем"
        text="В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой. "
        image={redBike}
      />

      <MiddleText />

      <ColorBlock color="#3e5db8" text="Годовое ТО" />
      <ColorBlock color="#0088ff" text="Выравнивание колес" />
      <ColorBlock color="#c2ffe3" text="Настройка переключателей" />

      <LeftImgrightText image={bikes}/>
    </>
  );
}

export default App;
