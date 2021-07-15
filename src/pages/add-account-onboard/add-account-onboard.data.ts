import {OnBoardStepType} from "../onboard/onboard.type";
import * as Yup from 'yup';

export const addAccountOnboardData: OnBoardStepType[] = [
    {
        desc: 'add-account.onboard',
        validationSchema: Yup.object({}),
        fields: [
            {
                type: 'textarea',
                name: 'dietary_restrictions',
                label: 'profile:dietary-restrictions'
            },
            {
                type: 'textarea',
                name: 'injuries',
                label: 'profile:injuries'
            },
        ]
    }
];