import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';
import { useTranslation } from 'react-i18next';

import React from 'react'
import LanguageButton from '../components/LanguageButton';

const Home = () => {
  const { t } = useTranslation();
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <div className='flex gap-4 justify-between'>
              <img
              src='./threejs.png'
              alt="logo"
              className="w-8 h-8 object-contain"
            />
            <LanguageButton />
            </div>
            
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headContentAnimation}>
              <h1 className='head-text'>
              {t("title1")} <br className='xl:block hidden'/> {t("title2")}
              </h1>
            </motion.div>
            <motion.div 
              {...headContainerAnimation}
              className="flex flex-col gap-5"
              >
              <p className='max-w-md font-normal text-gray-600 text-base'>
              {t("subtitle1")}<strong>{t("subtitle2")}</strong>{' '} {t("subtitle3")}
              </p>

              <CustomButton
                type='filled'
                title={t("buttonCustomize")}
                handleClick={() => state.intro = false}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence> 
  )
}

export default Home