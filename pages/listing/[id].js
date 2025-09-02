import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";
import Error from "next/error";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/listings/${id}`
  );

  if (isLoading) return null;
  if (error || data === null || data === undefined || data.size === 0)
    return <Error statusCode={404} />;

  return (
    <>
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </>
  );
}
