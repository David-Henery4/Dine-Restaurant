import { apiVersion } from "../../sanity/env";

const createBooking = async (bookingFormData) => {
  //
  const mutation = {
    mutations: [
      {
        create: {
          _type: "bookings",
          ...bookingFormData,
        },
      },
    ],
  };
  //
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v${apiVersion}/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}`,
      },
      body: JSON.stringify(mutation)
    }
  );
  //
  return res
}

export default createBooking