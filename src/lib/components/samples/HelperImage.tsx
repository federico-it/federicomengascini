import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
type HelperImageProps = {
  label?: string;
  src: string;
};

const size = 20;

const HelperImage = ({ label, src }: HelperImageProps) => {
  return (
    <Tooltip hasArrow aria-label={label} label={label} placement="auto-end">
      <Image src={src} alt={label || ""} title={label || ""} height={size} width={size} />
    </Tooltip>
  );
};

HelperImage.defaultProps = {
  label: "",
};

export default HelperImage;
