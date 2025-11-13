"use client";

import { Card, Skeleton } from "antd";

export function ProductCardSkeleton() {
  return (
    <Card
      className="max-w-[270px] w-full mx-auto rounded-xl"
      cover={
        <div className="relative h-[250px] bg-surface-alt rounded-t-xl flex items-center justify-center">
          <Skeleton.Image active style={{ width: "100%", height: "100%" }} />
        </div>
      }
    >
      <Skeleton active title={false} paragraph={{ rows: 2 }} />
    </Card>
  );
}
