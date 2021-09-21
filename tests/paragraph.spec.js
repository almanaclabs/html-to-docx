import { htmlToXmlString, trim } from './utils';


describe('Paragraph', () => {

    it('Simple paragraph', () => {
        expect(trim(htmlToXmlString('<p>Content</p>')))
        .toEqual(trim(
        `<p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
            <pPr>
                <spacing xmlns:ns1="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns1:lineRule="exact"/>
             </pPr>
            <r>
                <rPr/>
                <t xml:space="preserve">Content</t>
            </r>
        </p>`));
    })

    it('Paragraph with style attributes', () => {
        const body = `<p style="
            color:#cecece; 
            background-color:#ffffff; 
            text-align:center; 
            font-size:20px; 
            line-height:1.5;
        " >Content</p>`;
        expect(trim(htmlToXmlString(body)))
        .toEqual(trim(
        `<p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <jc xmlns:ns1="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns1:val="center"/>
          <spacing xmlns:ns2="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns2:line="450" ns2:lineRule="exact"/>
        </pPr>
        <r>
          <rPr>
            <color xmlns:ns3="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns3:val="cecece"/>
            <shd xmlns:ns4="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns4:val="clear" ns4:fill="ffffff"/>
            <sz xmlns:ns5="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns5:val="30"/>
          </rPr>
          <t xml:space="preserve">Content</t>
        </r>
      </p>`));
    })

    it('Paragraph with text elements', () => {
        const body = `<p>
        <b>Bold, </b>
        <i>Italic, </i>
        <u>Underline, </u>
        <s>Strike, </s>
        <sub>Subscript, </sub>
        <sup>Superscript</sup> and 
        <mark>Highlighted</mark>
        </p>`
        expect(trim(htmlToXmlString(body)))
        .toEqual(trim(
        `<p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <spacing xmlns:ns1="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns1:lineRule="exact"/>
        </pPr>
        <r>
          <rPr>
            <b/>
          </rPr>
          <t xml:space="preserve">Bold, </t>
        </r>
        <r>
          <rPr>
            <i/>
          </rPr>
          <t xml:space="preserve">Italic, </t>
        </r>
        <r>
          <rPr>
            <u xmlns:ns2="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns2:val="single"/>
          </rPr>
          <t xml:space="preserve">Underline, </t>
        </r>
        <r>
          <rPr>
            <strike xmlns:ns3="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns3:val="true"/>
          </rPr>
          <t xml:space="preserve">Strike, </t>
        </r>
        <r>
          <rPr>
            <vertAlign xmlns:ns4="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns4:val="subscript"/>
          </rPr>
          <t xml:space="preserve">Subscript, </t>
        </r>
        <r>
          <rPr>
            <vertAlign xmlns:ns5="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns5:val="superscript"/>
          </rPr>
          <t xml:space="preserve">Superscript</t>
        </r>
        <r>
          <rPr/>
          <t xml:space="preserve"> and </t>
        </r>
        <r>
          <rPr>
            <highlight xmlns:ns6="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns6:val="yellow"/>
          </rPr>
          <t xml:space="preserve">Highlighted</t>
        </r>
      </p>`));
    })

 it('Paragraph with nested text elements', () => {
        const body = `<p>
        <b>
            <i>
                <u>Bold, Italic and Underlined </u>
            </i>
        </b>
        </p>`
        expect(trim(htmlToXmlString(body)))
        .toEqual(trim(
        `<p xmlns="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <pPr>
          <spacing xmlns:ns1="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns1:lineRule="exact"/>
        </pPr>
        <r>
          <rPr>
            <b/>
            <i/>
            <u xmlns:ns2="http://schemas.openxmlformats.org/wordprocessingml/2006/main" ns2:val="single"/>
          </rPr>
          <t xml:space="preserve">Bold, Italic and Underlined </t>
        </r>
      </p>`));
    })




})