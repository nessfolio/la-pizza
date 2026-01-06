import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button variant={"outline"}>Корзина</Button>
      <Skeleton>yo</Skeleton>
      <Input></Input>
    </div>
  );
}
