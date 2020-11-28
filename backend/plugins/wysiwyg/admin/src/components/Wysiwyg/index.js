import React from "react";
import { Label, Description, ErrorMessage } from "@buffetjs/styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from 'styled-components';

const Editor = ({ onChange, name, value }) => (
  <ReactQuill
    theme="snow"
    value={value}
    modules={{
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        ['code-block', 'blockquote'],
        [{ size: ['small', false, 'large', 'huge'] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        [{ color: []}, { background: [] }],
        [{ align: [] }],
        ['clean'],
      ],
    }}
    onChange={(content, event, editor) => {
      onChange({ target: { name, value: content } });
    }} />
);

const Wrapper = styled.div`
  margin-bottom: 1.6rem;
  font-size: 1.3rem;
  font-family: Lato;
`;

const Wysiwyg = ({ inputDescription, error, label, name, onChange, value }) => (
  <Wrapper>
    <Label htmlFor={name} style={{ marginBottom: 10 }} >{label} </Label>

    <Editor name={name} onChange={onChange} value={value} />

    {!error && inputDescription && (
      <Description>{inputDescription}</Description>
    )}
    {!!error && <ErrorMessage>{error}</ErrorMessage>}
  </Wrapper>
);
 
export default Wysiwyg;