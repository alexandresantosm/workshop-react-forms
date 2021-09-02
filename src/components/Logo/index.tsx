interface LogoProps {
  src: string;
  height: string;
  alt: string;
}

export const Logo = ({ src, height, alt }: LogoProps) => {
  return <img src={src} height={height} alt={alt} />;
};
