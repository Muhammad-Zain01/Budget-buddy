import styled from "styled-components";

const LoaderWrapper = styled.div`
    position: absolute;
    width: calc(100vw - 80px);
    top:0;
    right:0;
    height: 100vh;
    background: rgb(255 255 255 / 0%);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

`
const Loader = () => {
    return (
        <LoaderWrapper>
            {/* Loadier */}
        </LoaderWrapper>
    )
}
export default Loader;