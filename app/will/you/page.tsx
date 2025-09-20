"use client";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { dancing_script } from "@/lib/fonts";
import { Spotify } from "./spotify";

export default function Home() {
  const line1 = `Sach kahu toh tum meri smile ki wajah ho,`
  const line11=  `haaye ye din nahi kat ta jis din tumse baat na ho. `
  const line2=   `Iss dil mein bas tumhari hi tasveer banni hai,`
  const line22=  `            Kabhi tha bas ek left swipe aaj ek puri story bani hai.`
   const line3= `Hamesha tum meri sapno ki jaan ban jaati ho,`
   const line33=             `Aur uss chote se dibbe mein baith ke hasati ho. ❤️`;
                
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4  text-3xl text-center md:text-4xl lg:text-7xl  flex-col">
        <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 pointer-events-none">
          <TextGenerateEffect
            words={line1}
            className={`text-5xl md:text-8xl lg:text-9xl ${dancing_script.className}`}
          />
          <TextGenerateEffect
            words={line11}
            className={`text-5xl md:text-8xl lg:text-9xl ${dancing_script.className}`}
          />
          <TextGenerateEffect
            words={line2}
            className={`text-5xl md:text-8xl lg:text-9xl ${dancing_script.className}`}
          />
          <TextGenerateEffect
            words={line22}
            className={`text-5xl md:text-8xl lg:text-9xl ${dancing_script.className}`}
          />
          <TextGenerateEffect
            words={line3}
            className={`text-5xl md:text-8xl lg:text-9xl ${dancing_script.className}`}
          />
          <TextGenerateEffect
            words={line33}
            className={`text-5xl md:text-8xl lg:text-9xl ${dancing_script.className}`}
          />
        </div>
        <Spotify />
      </div>
    </BackgroundGradientAnimation>
  );
}
