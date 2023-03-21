declare const ImageSvgUri: ({ imageUrl, width, height, imageAlt, }: {
    imageUrl: string;
    width: number;
    height: number;
    imageAlt?: string | undefined;
}) => JSX.Element;
export default ImageSvgUri;
