import GridComponent from "@/components/GridComponent";
import Heading from "@/components/Heading";

export default function Home() {
  return (
    <div>
      <Heading text={"Kamin"}></Heading>
      <GridComponent></GridComponent>
      <p className="mt-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, 
      quis hic at accusantium eum quam officia quos perferendis culpa autem rerum repellendus ducimus aspernatur asperiores velit obcaecati sapiente animi. At.
      </p>
    </div>
  );
}
