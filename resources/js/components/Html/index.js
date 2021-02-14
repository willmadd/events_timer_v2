import React from 'react';
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';

const HTML = ({children}) => <>{children && parse(sanitizeHtml(children))}</>

export default HTML;