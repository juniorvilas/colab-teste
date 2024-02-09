import { ComponentType } from "react";
import { IconBaseProps } from "react-icons";

export type LoadingProps = IconBaseProps & {
  icon: ComponentType;
};
export function Loading({ icon: Icon, ...rest }: LoadingProps) {
  return <Icon {...rest} />;
}
