import { style, globalStyle } from '@vanilla-extract/css';

export const heading = style({
  border: "3px solid red",
  fontSize: "3rem"
});

globalStyle('body', {
  margin: 0,
  background: "yellow"
});