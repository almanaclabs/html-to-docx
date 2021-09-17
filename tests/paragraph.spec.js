import DocxDocument from '../src/docx-document';
import  renderDocumentFile  from '../src/helpers/render-document-file';
import JSZip from 'jszip';


describe('Paragraph', () => {

    it('tt', () => {
        const htmlString = `<!DOCTYPE html><p>Content</p></html>`;
        const docxDocument = new DocxDocument({ zip:new JSZip(), htmlString: minifyHTMLString(htmlString) });
        docxDocument.documentXML = renderDocumentFile(docxDocument);
        console.log(docxDocument.generateDocumentXML());
    })


})