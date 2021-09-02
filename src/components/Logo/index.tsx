interface LogoProps {
  src: string;
  height: string;
  alt: string;
}

export const Logo = ({ src, height, alt }: LogoProps): JSX.Element => {
  return <img src={src} height={height} alt={alt} />;
};
