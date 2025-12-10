import LoginForm from "@/features/login/forms/LoginForm";
import { Col, Row } from "antd";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

const LoginPage = async () => {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <main>
      <section className="section-container">
        <div className="relative container mx-auto px-2 sm:px-0">
          <Row gutter={[50, 50]} justify="center" align="middle">
            <Col xs={24} lg={12}>
              <div className="h-full w-full">
                <Image
                  src="/images/signup.webp"
                  alt="signup"
                  width={800}
                  height={781}
                />
              </div>
            </Col>
            <Col xs={24} lg={8}>
              <LoginForm />
            </Col>
          </Row>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
