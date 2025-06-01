// app/routes/index.tsx
import {
  createFileRoute,
  useRouter,
  useNavigate,
  Link,
} from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const router = useRouter();
  return (
    <>
      <h1>Jai Shree Ram</h1>
      <Link to="/projects">View my projects</Link>
    </>
  );
}
