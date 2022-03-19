import React, {useState} from "react";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";

export const TestPage = () => {


    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Write text'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const alertError = () => {
        alert((text.length >= 1) ? text : error)
        setText('')
    }

    return <>
        <SuperInputText value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}/>


        <div>
            <SuperButton onClick={alertError}>Button</SuperButton>
        </div>
        <SuperCheckbox/>
    </>
}