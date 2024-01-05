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

export interface MyComponentProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  cart: boolean;
  setTotal: (total: number) => void;
  total: number;
  number: number;
  setNumber: (number: number) => void;
  setCart: (cart: boolean) => void;
  count: number;
  setCount: (count: number) => void;
  totalBuying: () => void;
  showLightBox: boolean;
  setShowLightBox: (showLightBox: boolean) => void;
  children: undefined;
}
