"use client";
import { formatCurrency } from "@/lib/formatCurrency";
import { formatDate } from "@/lib/formatDate";
import { Button, Card, Divider, Empty, List, Skeleton } from "antd";
import Image from "next/image";
import Link from "next/link";
import useGetOrders from "../hooks/useGetOrders";

const Orders = () => {
  const { orders, isLoading } = useGetOrders();

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="flex justify-center py-8">
          <Skeleton active paragraph={{ rows: 4 }} />
        </div>
      ) : orders.length === 0 ? (
        <Empty description="No orders yet" image={Empty.PRESENTED_IMAGE_SIMPLE}>
          <Link href="/products">
            <Button type="primary">Start Shopping</Button>
          </Link>
        </Empty>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card
              key={order.id}
              className="mb-4 shadow-sm"
              title={
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-semibold">
                      Order #{order.id.slice(-8)}
                    </span>
                    <span className="ml-4 text-sm text-gray-500">
                      {formatDate(order.createdAt)}
                    </span>
                  </div>
                </div>
              }
            >
              {/* Order Items */}
              <div className="mb-4">
                <h4 className="mb-2 font-medium">Items</h4>
                <List
                  itemLayout="horizontal"
                  dataSource={order.items}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Image
                            src={item.product?.image?.[0]?.img}
                            alt={item.product?.name}
                            width={50}
                            height={50}
                          />
                        }
                        title={item.name || item.product?.name}
                        description={
                          <div className="flex items-center justify-between">
                            <span>Quantity: {item.quantity}</span>
                            <span className="font-medium">
                              {formatCurrency(item.price * item.quantity)}
                            </span>
                          </div>
                        }
                      />
                    </List.Item>
                  )}
                />
              </div>

              <Divider className="my-4" />

              {/* Order Summary */}
              <div className="flex justify-between">
                <div>
                  <h4 className="font-medium">Shipping Address</h4>
                  <p className="text-gray-600">
                    {order.address}, {order.city}, {order.country}
                  </p>
                </div>
                <div className="text-right">
                  <h4 className="font-medium">Order Total</h4>
                  <p className="text-lg font-bold text-blue-600 md:text-2xl">
                    {formatCurrency(order.total)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
