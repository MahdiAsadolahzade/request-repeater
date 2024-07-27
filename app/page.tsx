// pages/index.tsx
import RequestForm from "../components/RequestForm";
import Instructions from "../components/Instructions";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Instructions />
      <RequestForm />
    </div>
  );
}
