import Navbar from "@/components/navbar";
import Link from "next/link";

const Shivam = () => {
  return (
    <div>
      <Navbar />
      <h4 className="">Shivam page</h4>
      <Link href="/">home page</Link>
    </div>
  );
};

export default Shivam;
