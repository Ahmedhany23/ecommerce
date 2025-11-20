"use client";

import { Skeleton } from "antd";

const AboutCardSkeleton = () => {
  return Array.from({ length: 4 }).map((_, i) => (
    <div
      key={i}
      className="flex h-[564px] flex-col items-center justify-center rounded"
    >
      <div className="bg-surface-alt relative mx-auto flex h-[340px] w-full items-center justify-center md:w-[370px]">
        <div className="bg-surface-alt relative flex h-[250px] items-center justify-center rounded-t-xl">
          <Skeleton.Image active style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
      <div className="mt-8 text-center xl:text-left">
        <Skeleton active title={false} paragraph={{ rows: 1 }} />
        <Skeleton active title={false} paragraph={{ rows: 1 }} />
        <div className="mt-4 flex items-center justify-center gap-4 xl:justify-normal">
          <Skeleton.Input active />
          <Skeleton.Input active />
          <Skeleton.Input active />
          <Skeleton.Input active />
        </div>
      </div>
    </div>
  ));
};

export default AboutCardSkeleton;
