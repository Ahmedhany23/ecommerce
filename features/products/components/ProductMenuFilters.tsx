"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Menu, Input } from "antd";
import {
  FilterOutlined,
  TagsOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const categories = [
  "phones",
  "computers",
  "smartWatch",
  "camera",
  "headPhones",
  "gaming",
];

export default function ProductMenuFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams],
  );

  // selected category keys
  const selectedCategoryKeys = useMemo(() => {
    const url = searchParams.get("categories");
    return url ? url.split(",") : [];
  }, [searchParams]);

  // handle category toggles
  const handleCategoryChange = (keys: string[]) => {
    if (keys.length > 0) params.set("categories", keys.join(","));
    else params.delete("categories");

    router.push(`?${params.toString()}`, { scroll: false });
  };

  // handle price input
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const cleaned = value.replace(/\D/g, "");

    setPriceRange((prev) => ({ ...prev, [name]: cleaned }));

    if (cleaned) params.set(name, cleaned);
    else params.delete(name);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full shadow-xl">
      <Menu
        mode="inline"
        multiple
        selectedKeys={selectedCategoryKeys}
        onSelect={({ selectedKeys }) =>
          handleCategoryChange(selectedKeys as string[])
        }
        onDeselect={({ selectedKeys }) =>
          handleCategoryChange(selectedKeys as string[])
        }
        items={[
          {
            key: "filters-title",
            label: "Filters",
            icon: <FilterOutlined />,
            disabled: true,
            style: { opacity: 1, fontWeight: "bold" },
          },

          // CATEGORY SECTION -------------------------
          {
            key: "category-group",
            label: "Categories",
            icon: <TagsOutlined />,
            children: categories.map((c) => ({
              key: c,
              label: c[0].toUpperCase() + c.slice(1),
              icon: <TagsOutlined />,
            })),
          },

          // PRICE SECTION -----------------------------
          {
            key: "price-group",
            label: "Price",
            icon: <DollarOutlined />,
            children: [
              {
                key: "price-min",
                style: { pointerEvents: "none" },
                disabled: true,
                label: (
                  <div className="flex items-center gap-2">
                    <span>From</span>
                    <Input
                      name="min"
                      value={priceRange.min}
                      onChange={handlePriceChange}
                      style={{ width: "90px", pointerEvents: "auto" }}
                    />
                  </div>
                ),
              },
              {
                key: "price-max",
                style: { pointerEvents: "none" },
                disabled: true,
                label: (
                  <div className="flex items-center gap-2">
                    <span>To</span>
                    <Input
                      name="max"
                      value={priceRange.max}
                      onChange={handlePriceChange}
                      style={{ width: "90px", pointerEvents: "auto" }}
                    />
                  </div>
                ),
              },
            ],
          },
        ]}
      />
    </div>
  );
}
