import DocxDocument from '../src/docx-document';
import  renderDocumentFile  from '../src/helpers/render-document-file';
import  { minifyHTMLString }  from '../index';
import JSZip from 'jszip';

export const htmlToXmlString = (body) => {
    const htmlString = minifyHTMLString(`<!DOCTYPE html>${body}</html>`);
    return renderDocumentFile(new DocxDocument({ zip:new JSZip(), htmlString })).toString({ prettyPrint: true })
}

export const trim = str => str.replace(/\s/g, '');
