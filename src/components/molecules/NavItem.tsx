import { FC, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  children: ReactNode;
  href: string;
  disabled?: boolean;
  isExternal?: boolean;
}
const NavItem: FC<Props> = (props: Props) => {
  const { children, href, disabled = false, isExternal = false } = props;

  const router = useRouter();
  const isCurrent = router.pathname === href;

  const DisabledItem = () => (
    <div className="flex gap-2 justify-center items-center">
      <div className={`py-5 opacity-10 cursor-default `}>{children}</div>
    </div>
  );

  return (
    <>
      {disabled ? (
        <DisabledItem />
      ) : isExternal ? (
        <a href={href} rel="noreferrer" target="_blank">
          <Item isCurrent={isCurrent}>{children}</Item>
        </a>
      ) : (
        <Link href={href}>
          <Item isCurrent={isCurrent}>{children}</Item>
        </Link>
      )}
    </>
  );
};

interface ItemProps {
  children: ReactNode;
  isCurrent: boolean;
}
const Item: FC<ItemProps> = (props: ItemProps) => {
  const { children, isCurrent } = props;
  return (
    <div
      className={` transition-200 flex gap-4 justify-center items-center ${
        isCurrent
          ? "text-somos-orange cursor-default"
          : " text-white hover:text-somos-brown cursor-pointer"
      }`}
    >
      <span className="text-sm">X</span>{" "}
      <p className="text-[32px] ">{children}</p>
    </div>
  );
};

export default NavItem;
