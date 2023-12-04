'use client'

import { useState } from 'react'
import { Dropzone, ExtFile, FileMosaic } from '@files-ui/react'

export const DragAndDrop = ({ transformImageToCode }: { transformImageToCode: (file: File) => Promise<void> }) => {
  const updateFiles = (files: ExtFile[]) => {
    const file = files[0].file
    if (file !== undefined) transformImageToCode(file)
  }
  return (
    <Dropzone
      header={false}
      footer={false}
      maxFiles={1}
      accept="image/*"
      label="Arrastra aquí tu captura de pantalla"
      onChange={updateFiles}
    ></Dropzone>
  )
}
