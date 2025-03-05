
import TapImage from '../assets/images/Tap.png'
import { BsStars } from "react-icons/bs";


const words =[
  "Performance",
  'Accessible',
  'Secure',
  'Interactive',
  
  'Maintainable',
  'Usable',
  'Modern',
  'Relaible',

  "Performance",
  'Accessible',
  'Secure',
  'Interactive',
  
  'Maintainable',
  'Usable',
  'Modern',
  'Relaible',

  "Performance",
  'Accessible',
  'Secure',
  'Interactive',
  
  'Maintainable',
  'Usable',
  'Modern',
  'Relaible',
]


export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24'>
    <div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-clip -rotate-3 w-[120vw] -left-[10vw] relative'>
      <div className='flex [mask-image:linear-gradient(to_right,transparent_8%,black_15%,black_85%,transparent_92%)] [mask-composite:exclude]'>
        <div className='flex flex-none gap-4 py-3 pr-4 animate-infinite-scroll will-change-transform'>
          {words.map(word => (
            <div key={word} className='inline-flex gap-14 items-center'>
              <span className='text-black/90 uppercase font-extrabold text-sm md:text-xl lg:text-2xl'>{word}</span>
              <BsStars className='size-6 text-black/90 -rotate-12' />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};
