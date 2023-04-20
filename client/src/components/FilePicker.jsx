import React from 'react'

import CustomButton from './CustomButton'
import { useTranslation } from 'react-i18next';

const FilePicker = ({ file, setFile, readFile }) => {
  const { t } = useTranslation();
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
        {t("buttonFile")}
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? `${t("textFile")}` : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title={t("buttonLogo")}
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title={t("buttonFull")}
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}

export default FilePicker