import {Content} from './content';


export interface Slide {
  timeRemaining?: number;
  stepNumber?: number;
  title?: string;
  content?: Content;
  isLast?: boolean;
  isFirst?: boolean;
  show?: boolean;
}
