import { redirect } from "next/navigation";

export default function MockPaymentPage({ searchParams }) {
  const params = new URLSearchParams();

  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item != null) params.append(key, String(item));
        });
      } else if (value != null) {
        params.set(key, String(value));
      }
    });
  }

  const query = params.toString();
  redirect(query ? `/donate/checkout?${query}` : "/donate/checkout");
}
