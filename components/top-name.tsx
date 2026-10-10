'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FlipImage from './FlipImage';
import { useSearchParams } from 'next/navigation';

export default function TopName() {
  const [loaded, setLoaded] = useState(false);
  const searchParams = useSearchParams();
  const flag = searchParams.get('flag') !== 'false';

  useEffect(() => {
    if (document.readyState === 'complete') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoaded(true);
      return;
    }

    const handleLoad = () => setLoaded(true);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center  lg:-mt-5  md:-mt-3.75 sm:-mt-3 ">
      <div className="flex flex-row justify-center items-center  ">
        <div className="flex flex-col mb-4 ">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="text-2xl sm:text-3xl   lg:text-4xl text-center font-semibold tracking-widest  text-gray-600 dark:text-[#70a3cf]  "
          >
            {flag ? (
              <span>Goloborodko Vitaly</span>
            ) : (
              <span>Голобородько Вiталiй</span>
            )}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.5,
              duration: 0.6,
              ease: 'easeOut',
            }}
            className="text-lg   md:text-xl  font-normal text-center tracking-wider  text-gray-600 dark:text-[#70a3cf]  "
          >
            {flag ? (
              <span>
                I build, improve and maintain <br />
                modern websites and web applications
              </span>
            ) : (
              <span>
                Я створюю, вдосконалюю та підтримую <br />
                сучасні вебсайти та вебзастосунки
              </span>
            )}
          </motion.p>
        </div>
        <FlipImage />
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 3.5,
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="text-lg   font-normal text-center tracking-wider   text-gray-600 dark:text-[#70a3cf]"
        >
          {flag ? (
            <span>
              I help small businesses and professionals create, improve and
              maintain <br />
              their online presence with modern web technologies.
            </span>
          ) : (
            <span>
              Я допомагаю малому бізнесу та професіоналам створювати,
              вдосконалювати та підтримувати <br />
              свою онлайн-присутність за допомогою сучасних веб-технологій.
            </span>
          )}
        </motion.p>
      </div>
    </div>
  );
}
