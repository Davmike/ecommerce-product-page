export interface LightBoxProps {
  showLightBox: boolean;
  setShowLightBox: (showLightBox: boolean) => void;
  children: React.ReactNode;
}

export interface SliderProps {
  count: number;
  setCount: (count: number) => void;
  setTotal: (total: number) => void;
  totalBuying: () => void;
  showLightBox: boolean;
  setShowLightBox: (showLightBox: boolean) => void;
  children: React.ReactNode;
}

export interface MyComponentProps extends DesktopHeaderProps, styleBurgerProps {
  setTotal: (total: number) => void;
  number: number | null;
  setNumber: (number: number) => void;
  setCount: (count: number) => void;
  totalBuying: () => void;
  showLightBox: boolean;
  setShowLightBox: (showLightBox: boolean) => void;
  children: undefined;
}

export interface headerProps extends styleBurgerProps, DesktopHeaderProps {}

export interface styleBurgerProps {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
}

export interface DesktopHeaderProps extends CartProps {
  setCart: (cart: boolean) => void;
}

export interface CartProps {
  cart: boolean;
  total: number;
  count: number;
}
