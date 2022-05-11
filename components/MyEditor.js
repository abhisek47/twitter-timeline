import React, { useEffect } from 'react'
import EditorJS from '@editorjs/editorjs'
import Embed from '@editorjs/embed'
import Delimiter from '@editorjs/delimiter'
import SimpleImage from './simple-image/SimpleImage'

const MyEditor = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      autofocus: true,
      tools: {
        delimiter: Delimiter,
        image: SimpleImage,
        embed: {
          class: Embed,
          config: {
            services: {
              youtube: true,
              twitter: true
            }
          }
        }
      }
    })
  }, [])

  return (
    <div>
      <div id='editor'></div>
    </div>
  )
}

export default MyEditor
