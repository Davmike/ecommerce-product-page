interface CartProps {
  cart: boolean;
}

export default function Cart({ cart }: CartProps) {
  return (
    <div className="px-[8px] pt-[8px] pb-[36px] flex fixed right-0 z-50 flex-row-reverse">
      {cart && (
        <div className="bg-[#FFFFFF] rounded-[10px] h-[256px] w-[360px]">
          <p className="text-[#1D2026] text-[16px] font-bold pt-[24px] pl-[24px]">
            Cart
          </p>
          <hr className="bg-[#E4E9F2] h-[1px] mt-[27px]" />
          <p className="flex justify-center items-center mt-[77px] text-[#69707D] text-[16px] font-bold">
            Your cart is empty.
          </p>
        </div>
      )}
    </div>
  );
}
