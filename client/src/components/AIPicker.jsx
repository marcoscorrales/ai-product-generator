import React from 'react'
import CustomButton from './CustomButton'
import { useTranslation } from 'react-i18next';

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  const { t } = useTranslation();
  return (
    <div className='aipicker-container'>
      <textarea 
        placeholder={t("textAi1")}
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
            type='outline'
            title={t("textAi2")}
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton
              type='outline'
              title={t("buttonAiLogo")}
              handleClick={() => handleSubmit('logo')}
              customStyles='text-xs'
            />

            <CustomButton
              type='filled'
              title={t("buttonAiFull")}
              handleClick={() => handleSubmit('full')}
              customStyles='text-xs'
            />

          </>
          )}
      </div>
    </div>
  )
}

export default AIPicker