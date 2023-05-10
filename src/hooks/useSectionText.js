import { v4 as uuidv4 } from 'uuid';

export const useSectionText = (arreyText) => {
    const text = arreyText.map(text => {
        const textId = uuidv4()

        return <p key={textId}>{text}</p>
    })

    return text
}
