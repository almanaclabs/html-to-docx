import { htmlToXmlString, trim } from './utils';

describe('Lists', () => {
    it('Simple unordered list', () => {
        const body = `<ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>`;
        expect(trim(htmlToXmlString(body)))
        .toEqual(trim(
        ` <p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <numPr>
            <ilvl xmlns:ns1="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns1:val="0"/>
            <numId xmlns:ns2="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns2:val="1"/>
          </numPr>
          <spacing xmlns:ns3="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns3:lineRule="exact"/>
        </pPr>
        <r>
          <rPr/>
          <t xml:space="preserve">Item 1</t>
        </r>
      </p>
      <p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <numPr>
            <ilvl xmlns:ns4="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns4:val="0"/>
            <numId xmlns:ns5="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns5:val="1"/>
          </numPr>
          <spacing xmlns:ns6="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns6:lineRule="exact"/>
        </pPr>
        <r>
          <rPr/>
          <t xml:space="preserve">Item 2</t>
        </r>
      </p>
      <p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <numPr>
            <ilvl xmlns:ns7="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns7:val="0"/>
            <numId xmlns:ns8="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns8:val="1"/>
          </numPr>
          <spacing xmlns:ns9="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns9:lineRule="exact"/>
        </pPr>
        <r>
          <rPr/>
          <t xml:space="preserve">Item 3</t>
        </r>
      </p>`));
    })

    it('Simple ordered list', () => {
        const body = `<ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>`;
        expect(trim(htmlToXmlString(body)))
        .toEqual(trim(
        `<p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <numPr>
            <ilvl xmlns:ns1="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns1:val="0"/>
            <numId xmlns:ns2="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns2:val="1"/>
          </numPr>
          <spacing xmlns:ns3="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns3:lineRule="exact"/>
        </pPr>
        <r>
          <rPr/>
          <t xml:space="preserve">Item 1</t>
        </r>
      </p>
      <p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <numPr>
            <ilvl xmlns:ns4="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns4:val="0"/>
            <numId xmlns:ns5="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns5:val="1"/>
          </numPr>
          <spacing xmlns:ns6="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns6:lineRule="exact"/>
        </pPr>
        <r>
          <rPr/>
          <t xml:space="preserve">Item 2</t>
        </r>
      </p>
      <p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <numPr>
            <ilvl xmlns:ns7="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns7:val="0"/>
            <numId xmlns:ns8="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns8:val="1"/>
          </numPr>
          <spacing xmlns:ns9="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns9:lineRule="exact"/>
        </pPr>
        <r>
          <rPr/>
          <t xml:space="preserve">Item 3</t>
        </r>
      </p>`));
    })

});
