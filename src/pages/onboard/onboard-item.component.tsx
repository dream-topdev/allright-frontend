import React, {useContext} from 'react';
import {OnBoardItemType} from "./onboard.type";
import {AuthFormContext} from "../../modules/auth/auth.context";
import FormRow from "../../components/forms/form-row/form-row.component";
import FormInputLabeled from "../../components/forms/form-input-labeled/form-input-labeled.component";
import FormCountrySelect from "../../components/forms/form-country-select/form-country-select.component";
import FormTextarea from "../../components/forms/form-textarea/form-textarea.component";
import {OnBoardContext} from "./onboard.context";
import FormDatepicker from "../../components/forms/form-datepicker/form-datepicker.component";
import {useTranslation} from "../../modules/i18n/i18n.hook";

const OnboardItem = ({type, name, label, data}:OnBoardItemType) => {
    const {update} = useContext(OnBoardContext);
    const {t} = useTranslation();
    switch (type) {
        case 'row':
            return <FormRow>{data?.map(p => <OnboardItem {...p}/>)}</FormRow>;
        case 'text':
            return <FormInputLabeled name={name||''} label={t(label||'')} onUpdate={update}/>;
        case 'country-select':
            return <FormCountrySelect name={name} label={t(label||'')} onUpdate={val => update(name||'', val)}/>;
        case 'textarea':
            return <FormTextarea name={name||''} label={t(label||'')} onUpdate={update}/>;
        case 'date':
            return <FormDatepicker name={name||''} label={t(label||'')} onUpdate={update}/>;
    }
    return null;
};

export default OnboardItem;