import { htmlToXmlString, trim } from './utils';

describe('Table', () => {
    it('Simple table', () => {
        const body = `
        <table >
            <tr><th>Header 1</th><th>Header 2</th></tr>
            <tr><td>Row 1 Col 1</td><td>Row 1 Col 2</td></tr>
            <tr><td>Row 2 Col 1</td><td>Row 2 Col 2</td></tr>
        </table>`;
        
        expect(trim(htmlToXmlString(body)))
        .toEqual(trim(
        `<tbl xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <tblPr>
          <tblBorders>
            <top xmlns:ns1="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns1:val="single" ns1:sz="2" ns1:space="0" ns1:color="000000"/>
            <bottom xmlns:ns2="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns2:val="single" ns2:sz="2" ns2:space="0" ns2:color="000000"/>
            <left xmlns:ns3="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns3:val="single" ns3:sz="2" ns3:space="0" ns3:color="000000"/>
            <right xmlns:ns4="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns4:val="single" ns4:sz="2" ns4:space="0" ns4:color="000000"/>
          </tblBorders>
          <tblCellSpacing xmlns:ns5="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns5:w="0" ns5:type="dxa"/>
          <tblCellMar>
            <top xmlns:ns6="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns6:type="dxa" ns6:w="80"/>
            <bottom xmlns:ns7="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns7:type="dxa" ns7:w="80"/>
            <left xmlns:ns8="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns8:type="dxa" ns8:w="160"/>
            <right xmlns:ns9="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns9:type="dxa" ns9:w="160"/>
          </tblCellMar>
          <jc xmlns:ns10="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns10:val="center"/>
        </tblPr>
        <tblGrid>
          <gridCol xmlns:ns11="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns11:w="4320"/>
          <gridCol xmlns:ns12="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns12:w="4320"/>
        </tblGrid>
        <tr>
          <trPr/>
          <tc>
            <tcPr>
              <tcBorders>
                <top xmlns:ns13="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns13:val="single" ns13:sz="1" ns13:space="0" ns13:color="000000"/>
                <bottom xmlns:ns14="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns14:val="single" ns14:sz="1" ns14:space="0" ns14:color="000000"/>
                <left xmlns:ns15="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns15:val="single" ns15:sz="1" ns15:space="0" ns15:color="000000"/>
                <right xmlns:ns16="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns16:val="single" ns16:sz="1" ns16:space="0" ns16:color="000000"/>
              </tcBorders>
            </tcPr>
            <p>
              <pPr>
                <spacing xmlns:ns17="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns17:lineRule="exact"/>
              </pPr>
              <r>
                <rPr/>
                <t xml:space="preserve">Header 1</t>
              </r>
            </p>
          </tc>
          <tc>
            <tcPr>
              <tcBorders>
                <top xmlns:ns18="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns18:val="single" ns18:sz="1" ns18:space="0" ns18:color="000000"/>
                <bottom xmlns:ns19="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns19:val="single" ns19:sz="1" ns19:space="0" ns19:color="000000"/>
                <left xmlns:ns20="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns20:val="single" ns20:sz="1" ns20:space="0" ns20:color="000000"/>
                <right xmlns:ns21="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns21:val="single" ns21:sz="1" ns21:space="0" ns21:color="000000"/>
              </tcBorders>
            </tcPr>
            <p>
              <pPr>
                <spacing xmlns:ns22="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns22:lineRule="exact"/>
              </pPr>
              <r>
                <rPr/>
                <t xml:space="preserve">Header 2</t>
              </r>
            </p>
          </tc>
        </tr>
        <tr>
          <trPr/>
          <tc>
            <tcPr>
              <tcBorders>
                <top xmlns:ns23="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns23:val="single" ns23:sz="1" ns23:space="0" ns23:color="000000"/>
                <bottom xmlns:ns24="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns24:val="single" ns24:sz="1" ns24:space="0" ns24:color="000000"/>
                <left xmlns:ns25="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns25:val="single" ns25:sz="1" ns25:space="0" ns25:color="000000"/>
                <right xmlns:ns26="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns26:val="single" ns26:sz="1" ns26:space="0" ns26:color="000000"/>
              </tcBorders>
            </tcPr>
            <p>
              <pPr>
                <spacing xmlns:ns27="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns27:lineRule="exact"/>
              </pPr>
              <r>
                <rPr/>
                <t xml:space="preserve">Row 1 Col 1</t>
              </r>
            </p>
          </tc>
          <tc>
            <tcPr>
              <tcBorders>
                <top xmlns:ns28="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns28:val="single" ns28:sz="1" ns28:space="0" ns28:color="000000"/>
                <bottom xmlns:ns29="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns29:val="single" ns29:sz="1" ns29:space="0" ns29:color="000000"/>
                <left xmlns:ns30="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns30:val="single" ns30:sz="1" ns30:space="0" ns30:color="000000"/>
                <right xmlns:ns31="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns31:val="single" ns31:sz="1" ns31:space="0" ns31:color="000000"/>
              </tcBorders>
            </tcPr>
            <p>
              <pPr>
                <spacing xmlns:ns32="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns32:lineRule="exact"/>
              </pPr>
              <r>
                <rPr/>
                <t xml:space="preserve">Row 1 Col 2</t>
              </r>
            </p>
          </tc>
        </tr>
        <tr>
          <trPr/>
          <tc>
            <tcPr>
              <tcBorders>
                <top xmlns:ns33="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns33:val="single" ns33:sz="1" ns33:space="0" ns33:color="000000"/>
                <bottom xmlns:ns34="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns34:val="single" ns34:sz="1" ns34:space="0" ns34:color="000000"/>
                <left xmlns:ns35="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns35:val="single" ns35:sz="1" ns35:space="0" ns35:color="000000"/>
                <right xmlns:ns36="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns36:val="single" ns36:sz="1" ns36:space="0" ns36:color="000000"/>
              </tcBorders>
            </tcPr>
            <p>
              <pPr>
                <spacing xmlns:ns37="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns37:lineRule="exact"/>
              </pPr>
              <r>
                <rPr/>
                <t xml:space="preserve">Row 2 Col 1</t>
              </r>
            </p>
          </tc>
          <tc>
            <tcPr>
              <tcBorders>
                <top xmlns:ns38="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns38:val="single" ns38:sz="1" ns38:space="0" ns38:color="000000"/>
                <bottom xmlns:ns39="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns39:val="single" ns39:sz="1" ns39:space="0" ns39:color="000000"/>
                <left xmlns:ns40="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns40:val="single" ns40:sz="1" ns40:space="0" ns40:color="000000"/>
                <right xmlns:ns41="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns41:val="single" ns41:sz="1" ns41:space="0" ns41:color="000000"/>
              </tcBorders>
            </tcPr>
            <p>
              <pPr>
                <spacing xmlns:ns42="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns42:lineRule="exact"/>
              </pPr>
              <r>
                <rPr/>
                <t xml:space="preserve">Row 2 Col 2</t>
              </r>
            </p>
          </tc>
        </tr>
      </tbl>
      <p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <spacing xmlns:ns43="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns43:lineRule="exact"/>
        </pPr>
      </p>`));
    })

});
