import asField from '../hoc/asField';

import {default as BasicCheckbox} from './Checkbox';
import {default as BasicRadio} from './Radio';
import {default as BasicSelect} from './Select';
import {default as BasicTextArea} from './TextArea';
import {default as BasicTextField} from './TextField';

export const Checkbox = asField(BasicCheckbox, 'checkbox');
export const Radio = asField(BasicRadio, 'radio');
export const Select = asField(BasicSelect);
export const TextArea = asField(BasicTextArea);
export const TextField = asField(BasicTextField);

export {default as CheckboxGroup} from './CheckboxGroup';
export {default as Option} from './Option';
export {default as RadioGroup} from './RadioGroup';
