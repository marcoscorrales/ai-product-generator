import React from 'react'

import { useTranslation } from 'react-i18next';

const LanguageButton = () => {
    const { i18n } = useTranslation();

    function handleChangeLanguage(event) {
      i18n.changeLanguage(event.target.value);
    }
  return (
    <select className='bg-transparent' onChange={handleChangeLanguage}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  )
}

export default LanguageButton