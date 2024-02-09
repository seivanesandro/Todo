import { ChangeEvent } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    background: #fafafa;
    color: #3808f8;
    border: 1px solid #414345;
    border-radius: 6rem;
    width: 15rem;
    padding: 8px 15px;
    outline: none;
    text-align: left;
    transition: all 0.3s linear;

    &:focus {
        outline: #89cff0 solid;
        border: #89cff0;
        transition: all 0.1s forwards;
    }

    &:hover {
        box-shadow:
            0 0 0.2rem #89cff0,
            0 0 0.2rem #fafafa,
            0 0 0.1rem #89cff0;
        outline: #89cff0 solid;
        border: #89cff0;
        box-decoration-break: none;
        transition: all 0.1s forwards;
    }

    &::selection {
        color: coral;
        background: black;
    }
`;

interface Props {
    nameInput: string;
    typeInput: string;
    placeholderInput: string;
    valueInput: string | number;

    //adicionar onchange events typescript
    onChange: (
        e: ChangeEvent<HTMLInputElement>
    ) => void;
}

const MyInput = ({
    nameInput,
    typeInput,
    placeholderInput,
    valueInput,
    onChange
}: Props) => {
    return (
        <>
            <Input
                type={typeInput}
                name={nameInput}
                placeholder={placeholderInput}
                value={valueInput}
                maxLength={18}
                onChange={onChange}
            />
        </>
    );
};

MyInput.defaultProps = {
    typeInput: 'text',
    nameInput: 'give a name',
    valueInput: 'any',
    placeholderInput: 'give a placeholder',
    onChange: () => {}
};

export default MyInput;
