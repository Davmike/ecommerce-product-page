export interface StyledBurgerProps extends MyComponentProps {
  // This extends from MyComponentProps for clarity and potential future modifications
}

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

export interface MyComponentProps extends DesktopHeaderProps {
  hidden: boolean;
  setHidden: (hidden: boolean) => void;
  setTotal: (total: number) => void;
  number: number | null;
  setNumber: (number: number) => void;
  setCount: (count: number) => void;
  totalBuying: () => void;
  showLightBox: boolean;
  setShowLightBox: (showLightBox: boolean) => void;
  children: undefined;
}

export interface DesktopHeaderProps extends CartProps {
  setCart: (cart: boolean) => void;
}

export interface CartProps {
  cart: boolean;
  total: number;
  count: number;
}
