import { LoaderBox, LoaderWrapper } from "@/styles/loader";

const Loader: React.FC = (): JSX.Element => {
  return (
    <LoaderWrapper>
      <LoaderBox>
        <div className="dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      </LoaderBox>
    </LoaderWrapper>
  )
}
export default Loader;