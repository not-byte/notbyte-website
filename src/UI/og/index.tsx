import {ImageResponse} from "next/og";
import {ReactNode} from "react";
import {headers} from "next/headers";

const size = {
  width: 1200,
  height: 630,
};

interface bannerOgImageProps {
  imageUrl: string;
  altString: string;
}

const ImageWrapper = ({children}: {children: ReactNode}) => (
  <div style={{
    backgroundImage: `linear-gradient(30deg, rgba(240,132,97,1.00) 0%, rgba(129,81,156,1.00) 40%, rgba(234,86,87,1.00) 69%, rgba(240,132,97,1.00) 100%)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  }}>
    {children}
  </div>
);


export function defaultOgImage(): ImageResponse {
  const host = headers().get("host")!;
  const protocol = host.startsWith("localhost") ? "http" : "https";

  // url has to be absolute
  const imageUrl = `${protocol}://${host}/logo-black.png`;

  return new ImageResponse(
    (
      <ImageWrapper>
        <img src={imageUrl} alt={imageUrl} width={300} height={300}/>
      </ImageWrapper>
    ),
    size
  );
}

export function bannerOgImage({imageUrl, altString}: bannerOgImageProps): ImageResponse {
  return new ImageResponse(
    (
      <ImageWrapper>
        <img src={imageUrl} alt={altString}/>
      </ImageWrapper>
    ),
    size
  );
}