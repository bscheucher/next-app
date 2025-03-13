import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";

export const metadata: Metadata = {
  title: "Customers",
};

// Explicitly define PageProps
interface PageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page({ searchParams }: PageProps) {
  // Await searchParams if it's a Promise
  const params = searchParams ? await searchParams : {};
  const query = typeof params?.query === "string" ? params.query : "";

  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="w-full">
      <CustomersTable customers={customers} />
    </div>
  );
}
