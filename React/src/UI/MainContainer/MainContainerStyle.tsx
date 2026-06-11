import styled from "styled-components";

export const MainContainerStyle = styled.div`
    width: 100%;
    padding: 1.5rem 1rem;

    @media (max-width: 480px) {
        padding: 1rem 0.75rem;
    }
`;

export const MainContainerContentStyle = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    padding: 0 1rem;

    @media (max-width: 480px) {
        padding: 0 0.5rem;
    }
`;

export const ImageParagraph = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: flex-start;

    img {
        width: 200px;
        border-radius: 8px;
        flex-shrink: 0;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;

        img {
            width: 180px;
        }
    }
`;
