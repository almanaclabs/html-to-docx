import  shortid from 'shortid';
import { htmlToXmlString, trim } from './utils';

jest.mock('shortid');

describe('Image', () => {
    it('Simple Image', () => {
        shortid.mockImplementation(() => 'test_image_id');
        const body = `<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />`;
        
        expect(trim(htmlToXmlString(body)))
        .toEqual(trim(`
        <p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
      <pPr>
        <spacing xmlns:ns1="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns1:lineRule="exact"/>
      </pPr>
      <r>
        <rPr/>
        <drawing>
          <inline xmlns="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" distB="0" distL="0" distR="0" distT="0">
            <extent cx="9525" cy="9525"/>
            <effectExtent b="0" l="0" r="0" t="0"/>
            <docPr id="1" name="image-test_image_id.gif"/>
            <graphic xmlns="http://schemas.openxmlformats.org/drawingml/2006/main">
              <graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">
                <pic xmlns="http://schemas.openxmlformats.org/drawingml/2006/picture">
                  <nvPicPr>
                    <cNvPr id="1" name="image-test_image_id.gif" descr=""/>
                    <cNvPicPr/>
                  </nvPicPr>
                  <blipFill>
                    <blip xmlns="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:ns2="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ns2:embed="rId5" cstate="print"/>
                    <srcRect xmlns="http://schemas.openxmlformats.org/drawingml/2006/main" b="0" l="0" r="0" t="0"/>
                    <stretch xmlns="http://schemas.openxmlformats.org/drawingml/2006/main">
                      <fillRect/>
                    </stretch>
                  </blipFill>
                  <spPr>
                    <xfrm xmlns="http://schemas.openxmlformats.org/drawingml/2006/main">
                      <off x="0" y="0"/>
                      <ext cx="9525" cy="9525"/>
                    </xfrm>
                    <prstGeom xmlns="http://schemas.openxmlformats.org/drawingml/2006/main" prst="rect"/>
                  </spPr>
                </pic>
              </graphicData>
            </graphic>
          </inline>
        </drawing>
      </r>
    </p>`));

    });

});
