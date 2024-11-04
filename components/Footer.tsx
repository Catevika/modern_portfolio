import MagicButton from '@/components/ui/MagicButton';
import { socialMedia } from '@/data';
import { FaLocationArrow } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer id='contact' className='w-full mb-[100px] md:mb-5 pb-10'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img className='w-full h-full opacity-50' src={'/footer-grid.svg'} alt='grid' />
      </div>

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple'>your</span>digital presence to the next level?</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach me out today and let&apos;discuss how I can help you to achieve your goals</p>
        <a href='mailto:contact@jsmastry.pro'>
          <MagicButton title='Let&apos;s get in touch' icon={<FaLocationArrow />} position='right' />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright &copy; 2024 Adrian Hajdin</p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300' key={profile.id}>
              <img src={profile.img} alt={`profile-${profile.id}`} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;