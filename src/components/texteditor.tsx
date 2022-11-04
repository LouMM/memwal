import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function EditorComponent() {
  return (
    <>
      <Editor
        id='default-editor'
        tinymceScriptSrc={'https://cdnjs.cloudflare.com/ajax/libs/tinymce/tinymce.min.js'}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor backcolor| alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | image | help',
          custom_colors: true, 
          image_caption: true,
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />     
    </>
  );
}

/*const btn = document.getElementById('fake-submit');
  btn.addEventListener('click', () => {
    const editorContent = tinymce.get('default-editor').getContent();
    const outputElement = document.getElementById('output-content');
    outputElement.innerText = editorContent;*/