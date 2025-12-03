"use client";

import {
  Button,
  Card,
  Col,
  Divider,
  InputNumber,
  Popconfirm,
  Row,
  Table,
  TableProps,
} from "antd";

import { Product } from "@/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  decrement,
  increment,
  removeFromCart,
  useCart,
} from "../../products/store/useProductsStore";
import calculateCartTotal from "@/src/lib/calculateCartTotal";

const Cart = () => {
  return (
    <Row gutter={[50, 50]} justify="center" align="middle">
      <Col xs={24}>
        <CartTable />
      </Col>
      <Col xs={24}>
        {/* Actions */}
        <div className="flex justify-between">
          <Link href="/">
            <Button size="large">Return To Shop</Button>
          </Link>
        </div>
      </Col>
      <Col xs={24} className="flex! justify-end">
        <CartDetails />
      </Col>
    </Row>
  );
};

export default Cart;

const CartDetails = () => {
  const cart = useCart();

  const subtotal = calculateCartTotal(cart);

  return (
    <Card
      title={
        <span className="font-poppins text-lg font-semibold">Cart Total</span>
      }
      className="w-full max-w-sm p-2"
    >
      {/* Subtotal */}
      <div className="font-poppins mb-2 flex justify-between text-sm">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <Divider className="my-2" />

      {/* Shipping */}
      <div className="font-poppins mb-2 flex justify-between text-sm">
        <span>Shipping:</span>
        <span>Free</span>
      </div>

      <Divider className="my-2" />

      {/* Total */}
      <div className="font-poppins mb-4 flex justify-between text-sm">
        <span>Total:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <Link href="/checkout">
        <Button type="primary" size="large" className="w-full">
          Process to checkout
        </Button>
      </Link>
    </Card>
  );
};

const CartTable = () => {
  const cart = useCart();

  const [items, setItems] = useState<Product[]>(cart || []);

  const handleQuantityChange = (id: string, value: number) => {
    const product = items.find((i) => i.id === id);
    if (!product) return;

    const oldQty = product.quantity ?? 1;

    if (value <= 0) {
      removeFromCart(id);
      return;
    }

    const diff = value - oldQty;

    if (diff > 0) {
      increment(id);
    } else if (diff < 0) {
      decrement(id);
    }
  };

  const columns: TableProps<Product>["columns"] = [
    {
      title: "Product",
      dataIndex: "title",
      key: "product",
      render: (_, record) => (
        <div className="flex items-center gap-10">
          <Image
            src={record.image[0]?.img}
            alt={record.name}
            width={70}
            height={70}
            className="h-20 w-20 object-contain object-center"
          />
          <p className="font-poppins font-semibold text-black">{record.name}</p>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (value: number) => (
        <p className="font-poppins font-semibold text-black">${value}</p>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "qty",
      render: (qty, record) => (
        <InputNumber
          min={1}
          value={qty}
          onChange={(val) => handleQuantityChange(record.id, Number(val))}
        />
      ),
    },
    {
      title: "Subtotal",
      key: "subtotal",
      render: (_, record) => (
        <p className="font-poppins font-semibold text-black">
          ${(record.quantity ?? 0) * record.price}
        </p>
      ),
    },
    {
      title: "Options",
      key: "options",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to remove this item?"
          onConfirm={() => {
            removeFromCart(record.id);
          }}
        >
          <Button type="primary" danger>
            Remove
          </Button>
        </Popconfirm>
      ),
    },
  ];

  useEffect(() => {
    if (cart) {
      setItems(cart);
    }
  }, [cart]);

  return (
    <Table
      columns={columns}
      dataSource={items}
      rowKey="id"
      pagination={false}
      bordered={false}
      showHeader
      scroll={{
        x: "max-content",
      }}
    />
  );
};
