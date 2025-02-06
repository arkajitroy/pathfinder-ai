import { Container } from "@/components/common/container";
import ResponsiveLayout from "@/components/common/responsive-layout";

export default function InterviewPage() {
  return (
    <ResponsiveLayout>
      <Container className="py-20">
        <h1 className="text-4xl font-bold">Industry Insights</h1>
        <p className="mt-4 text-muted-foreground">
          Stay up to date with the latest industry trends and insights.
        </p>
      </Container>
    </ResponsiveLayout>
  );
}
