import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { fallbackStyles, imageStyles, rootStyles } from "./Avatar.css";

interface AvatarProps {
  imageSource: string;
  userName: string;
  userInitials: string;
}

export function Avatar({ imageSource, userName, userInitials }: AvatarProps) {
  return (
    <AvatarPrimitive.Root className={rootStyles}>
      <AvatarPrimitive.Image
        className={imageStyles}
        src={imageSource}
        alt={userName}
      />
      <AvatarPrimitive.Fallback className={fallbackStyles}>
        {userInitials}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
