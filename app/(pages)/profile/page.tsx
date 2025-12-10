import AccountDetails from "@/features/profile/components/AccountDetails";
import { PrismaClient } from "@prisma/client";

import { Breadcrumb, Col, Row } from "antd";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function Profile() {
  const session = await getServerSession();
  const prisma = new PrismaClient();

  if (!session || !session.user?.email) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { name: true, email: true, createdAt: true },
  });

  if (!user) {
    redirect("/login");
  }

  return (
    <main>
      <section className="section-container">
        <Breadcrumb
          items={[{ title: <Link href="/">Home</Link> }, { title: "Profile" }]}
        />
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24}>
            <AccountDetails user={user} />
          </Col>
        </Row>
      </section>
    </main>
  );
}
