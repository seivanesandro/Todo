import React from 'react';
//styles
import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../utils/constantes';

const Show = keyframes`
     0%{
        top: -100%;
    }

    100%{
        opacity: 1;
         top: 13%;
    }

`;

const ShowFade = keyframes`
    0%{
        top: -100%;
        background: #000;
        opacity: 0;
    }
    50%{
        opacity: 0;
    }

    100%{
         top: 0%;
          opacity: 0.3!important;
    }
`;
const ContainerModal = styled.div`
    display: contents;
`;

const FadeStyle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000;
    animation: ${ShowFade} 2s forwards;
    opacity: 0.3;
    z-index: 1;
`;

const ModalStyle = styled.div`
    position: absolute;
    top: 13%;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 800px;
    height: 600px;
    z-index: 1;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2rem;
    animation: ${Show} 2s forwards;
    box-shadow: 0 0 0.3rem #343434;

    @media only screen and (${devices.mobileG}) {
        width: 320px !important;
        height: 550px !important;
        animation: ${Show} 2s forwards;
    }
    @media only screen and (${devices.tablet}) {
        width: 500px;
        height: 400px;
    }
`;

const ModalFormContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

interface Props {
    //declarar o children
    children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
    const closeModal = (
        e: React.MouseEvent
    ): void => {
        const modal =
            document.querySelector('#modal');
        modal?.classList.add('hide');
    };

    return (
        <ContainerModal
            id="modal"
            className="hide"
        >
            <FadeStyle
                className="fade-modal"
                onClick={closeModal}
            ></FadeStyle>
            <ModalStyle className="modal">
                <h2 className="text-modal">
                    Editar Tarefa
                </h2>
                <ModalFormContainer>
                    {children}
                </ModalFormContainer>
            </ModalStyle>
        </ContainerModal>
    );
};

export default Modal;
