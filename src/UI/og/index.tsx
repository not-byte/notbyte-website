import {ImageResponse} from "next/og";
import {ReactNode} from "react";
import {headers} from "next/headers";

const size = {
  width: 1200,
  height: 630,
};

interface BannerOgImageProps {
  imageUrl: string;
  altString: string;
}

const ImageWrapper = ({children}: {children: ReactNode}) => (
  <div
    style={{
      background: "linear-gradient(30deg, rgba(240,132,97,1) 0%, rgba(129,81,156,1) 40%, rgba(234,86,87,1) 69%, rgba(240,132,97,1) 100%)",
      display: "flex",
      flexDirection: "row",
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

export function projectOgImage({imageUrl, altString}: BannerOgImageProps): ImageResponse {
  return new ImageResponse(
    (
      <ImageWrapper>
        <img src={imageUrl} alt={altString}/>
      </ImageWrapper>
    ),
    size
  );
}

export function profileOgImage({imageUrl, altString}: BannerOgImageProps): ImageResponse {
  return new ImageResponse(
    (
      <ImageWrapper>
        <img src={imageUrl} alt={altString} style={{
          borderRadius: "50%",
          width: "400px",
          height: "400px",
          marginRight: "20px",
          display: "block",
        }}/>
        <div style={{display: "flex"}}>
          <h1 style={{
            fontSize: "80px",
            fontWeight: "900",
            color: "black",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            maxWidth: "600px",
          }}>{altString}</h1>
        </div>
      </ImageWrapper>
    ),
    size
  );
}