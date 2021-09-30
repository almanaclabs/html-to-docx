import DocxDocument from '../src/docx-document';
import  renderDocumentFile  from '../src/helpers/render-document-file';
import JSZip from 'jszip';


const minifyHTMLString = (htmlString) => {
    if (typeof htmlString === 'string' || htmlString instanceof String) {
      try {
        const minifiedHTMLString = htmlString
          .replace(/\n/g, '')
          .replace(/[\t]+\</g, '<')
          .replace(/\>[\t ]+\</g, '><')
          .replace(/\>[\t ]+$/g, '>');
  
        return minifiedHTMLString;
      } catch (error) {
        return null;
      }
    } else {
      return null;
    }
  };

export const htmlToXmlString = (body) => {
    const htmlString = minifyHTMLString(`<!DOCTYPE html>${body}</html>`);
    return renderDocumentFile(new DocxDocument({ zip:new JSZip(), htmlString })).toString({ prettyPrint: true })
}

export const trim = str => str.replace(/\s/g, '');
