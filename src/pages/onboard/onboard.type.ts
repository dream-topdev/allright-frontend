import {OptionType} from "../../types/option.type";
import {AnyObjectSchema} from 'yup';

export type OnBoardFieldType = 'text'|'date'|'select'|'row'|'textarea'|'country-select';
export type OnBoardItemType = {
    type: OnBoardFieldType;
    name?: string;
    label?: string;
    options?: OptionType[];
    data?: OnBoardItemType[];
}
export type OnBoardStepType = {
    desc: string;
    fields: OnBoardItemType[],
    validationSchema: AnyObjectSchema
}