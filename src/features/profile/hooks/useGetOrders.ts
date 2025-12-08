import { Order } from "@/src/types/order";
import { useQuery } from "@tanstack/react-query";

export const useGetOrders = () => {
  const { data, isLoading } = useQuery<{ orders: Order[] }>({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch("/api/orders");
      return res.json();
    },
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });

  return { orders: data?.orders || [], isLoading };
};

export default useGetOrders;
