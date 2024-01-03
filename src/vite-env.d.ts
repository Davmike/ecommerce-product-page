/// <reference types="vite/client" />

interface CartProps {
  cart: boolean;
  total: any;
  setTotal: any;
  number?: number;
  setNumber: React.Dispatch<React.SetStateAction<number | undefined>>;
  count: number;
}

interface StyledBurgerProps extends MyComponentProps {
  // This extends from MyComponentProps for clarity and potential future modifications
}

interface MyComponentProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  cart: boolean;
  setTotal: any;
  total: any;
  number?: number;
  setCart: (cart: boolean) => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface CartNumProps {
  number?: number;
  setTotal: any;
  totalBuying: () => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
