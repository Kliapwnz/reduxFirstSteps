import React, {ChangeEvent} from 'react';
import {Checkbox} from "@mui/material";

type PropsType = {
    isDone: boolean,
    callBack: (checked: boolean) => void
}

export const SuperCheckBox = (props: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked)


    }
    return (
        <div>
            <Checkbox
                checked={props.isDone}
                color="primary"
                onChange={onChangeHandler}
            />
        </div>
    );
};

