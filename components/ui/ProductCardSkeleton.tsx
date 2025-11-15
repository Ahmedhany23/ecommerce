"use client";

import { Card, Skeleton } from "antd";

export function ProductCardSkeleton() {
  return (
    <Card
      className="mx-auto w-full max-w-[270px] rounded-xl"
      cover={
        <div className="bg-surface-alt relative flex h-[250px] items-center justify-center rounded-t-xl">
          <Skeleton.Avatar active style={{ width: "100%", height: "100%" }} />
        </div>
      }
    >
      <Skeleton active title={false} paragraph={{ rows: 2 }} />
    </Card>
  );
}
